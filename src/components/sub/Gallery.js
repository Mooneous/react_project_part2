import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	const frame = useRef(null);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Open, setOpen] = useState(false);

	const key = '4612601b324a2fe5a1f5f7402bf8d87a';
	const method_interest = 'flickr.interestingness.getList';
	const method_user = 'flickr.people.getPhotos';
	const num = 200;
	const user = '164021883@N04';
	const url_interest = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
	const url_user = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${user}`;

	const getFlickr = async (url) => {
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
		frame.current.classList.add('on');
	};

	useEffect(() => getFlickr(url_interest), []);

	return (
		<>
			<Layout name={'Gallery'}>
				{/*클릭했을때 frame에 on제거(->순간적으로 내려갔다가)getFlicker호출(->frame에on추가돼 올라옴)*/}
				<button
					onClick={() => {
						frame.current.classList.remove('on');
						getFlickr(url_user);
					}}>
					My Gallery
				</button>
				<button
					onClick={() => {
						frame.current.classList.remove('on');
						getFlickr(url_interest);
					}}>
					Interest Gallery
				</button>
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
