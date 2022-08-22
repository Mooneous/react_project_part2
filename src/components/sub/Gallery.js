import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	//3. frame 참조객체 생성
	const frame = useRef(null);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Open, setOpen] = useState(false);
	//2. async await로 동기화
	const getFlickr = async () => {
		const key = 'e3e1c697d136946fb4d52bffc2cc35b7';
		const method_interest = 'flickr.interestingness.getList';
		const num = 20;
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;

		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
		//5. 이미지데이터를 모두 불러온 후 현재frame에 클래스 on 추가(6. 하면 이미지들 아래서 위로 올라옴 - css효과)
		frame.current.classList.add('on');
	};

	useEffect(getFlickr, []);

	return (
		<>
			<Layout name={'Gallery'}>
				{/*1. class.on지우기 4.ref로 참조*/}
				<div className='frame' ref={frame}>
					{Items.map((pic, idx) => {
						return (
							<article
								key={idx}
								onClick={() => {
									setIndex(idx);
									setOpen(true);
								}}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
											alt={pic.title}
										/>
									</div>
									<h2>{pic.title}</h2>
								</div>
							</article>
						);
					})}
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
