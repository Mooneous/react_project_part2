import Layout from '../common/Layout';
import Popup from '../common/Popup';
//npm i react-masonry-component
import Masonry from 'react-masonry-component';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlickr } from '../../redux/flickrSlice';

function Gallery() {
	//store에 있는 flickr데이터를 가져옴 (처음 사이클에서는 빈배열  가져옴)
	const Pics = useSelector((store) => store.flickr.data);
	const dispatch = useDispatch();

	const frame = useRef(null);
	const input = useRef(null);
	//추후 자식컴포넌트인 Popup에서 forwardRef로 전달되는 객체값을 참조하기위한 빈 참조객체 생성
	const popup = useRef(null);

	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	//masonry 전환속도 옵션객체 설정
	const masonryOptions = { transitionDuration: '0.5s' };
	const user = '164021883@N04';

	//saga로 전달될 axios호출시 필요한 옵션값이 담길 state
	const [Opt, setOpt] = useState({ type: 'user', user: user });

	//user요청 함수
	const showUser = (e) => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		//Opt값 변경 (user)
		setOpt({ type: 'user', user: e.target.getAttribute('user') });
		setEnableClick(false);
	};

	//interest요청 함수
	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		//Opt값 변경 (itnerest)
		setOpt({ type: 'interest' });
		setEnableClick(false);
	};

	//search요청 함수
	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		if (!EnableClick) return;
		setEnableClick(false);
		setLoading(true);
		frame.current.classList.remove('on');
		//getFlickr search url마지막 opt.tag의 tag에 result넣는건가봄~
		//Opt값 변경 (search)
		setOpt({ type: 'search', tag: result });
		//검색후 검색창 초기화
		input.current.value = '';
	};

	//데이터가 로딩완료되면 로딩바 제거하고 frame출력하는 함수
	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 600);
		}, 1000);
	};

	//처음  호출시에는 interest방식으로 호출
	//useEffect(() => getFlickr({ type: 'user', user: user }), []);
	//Opt값이 변경될떄마다 dispatch로 변경된 해당 Opt값을 Flickr_start액션객체에 담아서 saga에 전달
	//리덕스툴킷으로변환하면서 위에서아래로바뀜
	useEffect(() => {
		dispatch(fetchFlickr(Opt));
	}, [Opt]);

	//flickr데이터가 변경될때마다 (새로운데이터 요청을 해서 해당 요청이 완료될때마다) 로딩제거함수 호출
	useEffect(endLoading, [Pics]);

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='sectionCon'>
					<button user={user} onClick={showUser}>
						My Gallery
					</button>
					<button onClick={showInterest}>Interest Gallery</button>

					{/*검색박스 */}
					<div className='searchBox'>
						{/*엔터키를눌렀다떼는이벤트발생하면showSearch함수수행하시게~*/}
						<input
							type='text'
							ref={input}
							onKeyUp={(e) => {
								if (e.key === 'Enter') showSearch();
							}}
						/>
						<button onClick={showSearch}>search</button>
					</div>

					{Loading && <img className='loading' src={process.env.PUBLIC_URL + '/img/loading.gif'} />}

					<div className='frame' ref={frame}>
						{/* masonry를 적용한 요소들의 부모컴포넌트를 Masonry로 만들고 태그명 지정하고 옵션객체 연결 */}
						<Masonry elementType={'div'} options={masonryOptions}>
							{Pics.map((pic, idx) => {
								return (
									<article key={idx}>
										<div className='inner'>
											<div
												className='pic'
												onClick={() => {
													setIndex(idx);
													popup.current.open(); //setOpen(true)와 같은말
												}}>
												<img
													src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
													alt={pic.title}
												/>
											</div>

											<h2>{pic.title}</h2>

											<div className='profile'>
												{/*setAttribute : 속성바꿔주는함수?메서드? */}
												<img
													src={`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`}
													alt={pic.owner}
													onError={(e) => {
														e.target.setAttribute(
															'src',
															'https://www.flickr.com/images/buddyicon.gif'
														);
													}}
												/>
												<span user={pic.owner} onClick={showUser}>
													{pic.owner}
												</span>
											</div>
										</div>
									</article>
								);
							})}
						</Masonry>
					</div>
				</div>
			</Layout>
			{/*forwardRef내의 useImperativeHandle의 객체참조하게됨 : Popup컴포넌트에 참조객체 popup연결 - 원래 컴포넌트에는 참조객체연결이 불가하나 forwardRef로 전달되고 있으면 참조가능 */}
			<Popup ref={popup}>
				{/*Popup의 틀 자체는 부모요소에 계속 마운트되어 있다보니 아직 (Items->)Pics의 값이 불러와지지 않았을떄에는 오류 발생 : 처음마운트됐을때(Items->)Pics값은비어있다가2번째재렌더링될때axios함수가값을변경시킴 그래서처음오류발생하지않도록 조건문사용 : (Items->)Pics의 값이 비어있지 않을떄 img에 Popup에 출력되도록 설정 : Popup컴포넌트는출력하더라도(Items->)Pics의데이터값이받아지지않으면img내용출력되지않는다*/}
				{Pics.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`}
						alt={Pics[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;

/*
flickr api로 검색(플리커개발자페이지-flickr service로 들어가기)
개인API키값 : "e3e1c697d136946fb4d52bffc2cc35b7";
user_id = 196156351@N07
gallery_id = 72157720916413734
*/
/*react-masonry component검색(masonry리액트컴포넌트사용법알려쥼)*/
/*
	onKeyDown //키를 누를때
	onKeyUp //키를 눌렀다 뗐을때 (추천)
	onKeyPress //눌렀다 뗐을때 (한글자판에서는 안먹는 키가 있음)
*/
