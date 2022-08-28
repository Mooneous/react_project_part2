import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

function Youtube() {
	const popup = useRef(null);
	const [Index, setIndex] = useState(0);
	const Vids = useSelector((store) => store.youtube.data);

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='sectionCon'>
					{Vids.map((vid, idx) => {
						return (
							<article key={vid.id}>
								<div className='imgWrap'>
									<img
										src={vid.snippet.thumbnails.high.url}
										alt={vid.title}
										onClick={() => {
											setIndex(idx);
											popup.current.open();
										}}
									/>
								</div>

								<div className='txtWrap'>
									<div className='txtTit'>
										<h2>
											<sup className='number'>0{idx + 1}</sup>
											{vid.snippet.title.length > 20
												? vid.snippet.title.substr(0, 22) + '...'
												: vid.snippet.title}
										</h2>
									</div>
									<div className='txtDesc'>
										<p>
											{vid.snippet.description.length > 200
												? vid.snippet.description.substr(0, 90) + '...'
												: vid.snippet.description}
										</p>
										<span>{vid.snippet.publishedAt.split('T')[0]}</span>
									</div>

									<div
										className='playIconWrap'
										onClick={() => {
											setIndex(idx);
											popup.current.open();
										}}>
										<FontAwesomeIcon icon={faCirclePlay} />
										<span>WATCH</span>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>

			<Popup ref={popup}>
				{Vids.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Popup>
		</>
	);
}

export default Youtube;
