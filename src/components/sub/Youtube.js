import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false); //초기값 : 안보이게 false
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyB5JZfJTpMHm2WfEEIid2Dt443MfKM9XAU';
		const playlist = 'PL0niq1d_d9TP1sXECKOKrBpMhjbkfrjsE';
		const num = 3;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			//console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => {
					return (
						<article
							key={idx}
							onClick={() => {
								setOpen(true);
								setIndex(idx);
							}}>
							<div className='number'>
								<span>0{idx + 1}</span>
							</div>

							<div className='pic'>
								<img src={vid.snippet.thumbnails.standard.url} alt={vid.title} />
							</div>

							<div className='txt'>
								<h2>
									{vid.snippet.title.length > 20
										? vid.snippet.title.substr(0, 20) + '...'
										: vid.snippet.title}
								</h2>
								<p>
									{vid.snippet.description.length > 200
										? vid.snippet.description.substr(0, 200) + '...'
										: vid.snippet.description}
								</p>
								<span>{vid.snippet.publishedAt.split('T')[0]}</span>
							</div>

							<div className='playIcon'>
								<FontAwesomeIcon icon={faCirclePlay} />
							</div>

							<div className='watch'>
								<span>WATCH</span>
							</div>
						</article>
					);
				})}
			</Layout>

			{/* Open이라는 state값이 true일때만 팝업보여주기 그리고 setOpen스테이트 명으로 setOpen스테이트변경함수를 전달 */}
			{Open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
					{/*카멜케이스?frameborder소문자아니죠frameBorder대문자맞죠*/}
				</Popup>
			)}
		</>
	);
}

export default Youtube;
