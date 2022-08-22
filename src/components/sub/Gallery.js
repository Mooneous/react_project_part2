import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Gallery() {
	const key = 'e3e1c697d136946fb4d52bffc2cc35b7';
	const method = 'flickr.people.getPhotos';
	const num = 10;
	const id = '164021883@N04';
	const url = `https://www.flickr.com/services/rest/?method=${method}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${id}`;

	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0); //썸네일클릭시 인덱스를 가져와서 그에맞는 이미지 팝업하기 위해 필요
	const [Open, setOpen] = useState(false);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo); //옮겨담기
		});
	}, []);

	return (
		<>
			<Layout name={'Gallery'}>
				{Items.map((pic, idx) => {
					return (
						//article클릭했을때 setIndex값을 현재 idx값으로, setOpem을 true로 변경하기~
						<article
							key={idx}
							onClick={() => {
								setIndex(idx);
								setOpen(true);
							}}>
							<div className='pic'>
								<img
									src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
									alt={pic.title}
								/>
							</div>

							<h2>{pic.title}</h2>
						</article>
					);
				})}
			</Layout>
			{/*오픈 값이 참일때 실행 */}
			{Open && (
				<Popup setOpen={setOpen}>
					{/*Items라는 state데이터의 Index번째의~~가져오기*/}
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
