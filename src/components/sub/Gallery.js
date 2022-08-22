import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Gallery() {
	const key = 'e3e1c697d136946fb4d52bffc2cc35b7';
	const method = 'flickr.people.getPhotos';
	const num = 10;
	const id = '164021883@N04';
	const url = `https://www.flickr.com/services/rest/?method=${method}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${id}`;

	const [Items, setItems] = useState([]);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo); //옮겨담기
		});
	}, []);

	return (
		<Layout name={'Gallery'}>
			{Items.map((pic, idx) => {
				return (
					<article key={idx}>
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
	);
}

export default Gallery;

/*
flickr 개인키값 : "e3e1c697d136946fb4d52bffc2cc35b7";
user_id = 196156351@N07
gallery_id = 72157720916413734
*/
