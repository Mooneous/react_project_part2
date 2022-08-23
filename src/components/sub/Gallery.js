import Layout from '../common/Layout';
import Popup from '../common/Popup';
//npm i react-masonry-component
import Masonry from 'react-masonry-component';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	//추후 자식컴포넌트인 Popup에서 forwardRef로 전달되는 객체값을 참조하기위한 빈 참조객체 생성
	const popup = useRef(null);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	//masonry 전환속도 옵션객체 설정
	const masonryOptions = { transitionDuration: '0.5s' };
	const num = 100;
	const user = '164021883@N04';

	const getFlickr = async (opt) => {
		const key = '4612601b324a2fe5a1f5f7402bf8d87a';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';

		let url = '';
		//객체로 전달되는 type에 따라 호출한 URL을 새로 만들고 axios에 전달
		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		}
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
		}
		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;
		}

		await axios.get(url).then((json) => {
			//검색어의 결과값이 없을때 경고창 띄우고 이전 결과물 다시 출력
			console.log(json.data.photos.photo);
			if (json.data.photos.photo.length === 0) return alert('해당 검색어의 결과값이 없습니다.');
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			//로딩완료후 로딩상태false로변경
			setLoading(false);
			setTimeout(() => {
				//올라오는 0.5초동안은막아지지않으므로
				//로딩완료후 클릭가능상태true로변경
				setEnableClick(true);
			}, 500);
		}, 1000);
	};

	//user요청 함수
	const showUser = (e) => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({ type: 'user', user: e.target.getAttribute('user') });
		setEnableClick(false);
	};

	//interest요청 함수
	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({ type: 'interest' });
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
		getFlickr({ type: 'search', tag: result });
		//검색후 검색창 초기화
		input.current.value = '';
	};

	//처음  호출시에는 interest방식으로 호출
	useEffect(() => getFlickr({ type: 'user', user: user }), []);

	return (
		<>
			<Layout name={'Gallery'}>
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
						{Items.map((pic, idx) => {
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
			</Layout>
			{/*forwardRef내의 useImperativeHandle의 객체참조하게됨 : Popup컴포넌트에 참조객체 popup연결 - 원래 컴포넌트에는 참조객체연결이 불가하나 forwardRef로 전달되고 있으면 참조가능 */}
			<Popup ref={popup}>
				{/*Popup의 틀 자체는 부모요소에 계속 마운트되어 있다보니 아직 Items의 값이 불러와지지 않았을떄에는 오류 발생 : 처음마운트됐을때Items값은비어있다가2번째재렌더링될때axios함수가값을변경시킴 그래서처음오류발생하지않도록 조건문사용 : Items의 값이 비어있지 않을떄 img에 Popup에 출력되도록 설정 : Popup컴포넌트는출력하더라도Items의데이터값이받아지지않으면img내용출력되지않는다*/}
				{Items.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
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
