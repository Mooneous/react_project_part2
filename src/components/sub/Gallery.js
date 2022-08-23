import Layout from '../common/Layout';
import Popup from '../common/Popup';
//npm i react-masonry-component
import Masonry from 'react-masonry-component';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);

	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Open, setOpen] = useState(false);
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
	useEffect(() => getFlickr({ type: 'interest' }), []);

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
												setOpen(true);
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

			{Open && (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				</Popup>
			)}
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
