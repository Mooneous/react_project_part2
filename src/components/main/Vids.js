//swiper연결 : npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Popup from '../common/Popup';

function Vids() {
	const Youtube = useSelector((store) => store.youtube.data);
	const popup = useRef(null);
	const [Index, setIndex] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
				<h1>Recent Youtube</h1>
				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					autoplay={{ delay: 2000, disableOnInteraction: true }}
					pagination={{ clickable: true }}
					navigation={true}
					spaceBetween={50}
					loop={true}
					slidesPerView={3}
					centeredSlides={true}>
					{Youtube.map((vid, idx) => {
						if (idx >= 4) return;
						return (
							<SwiperSlide key={vid.id}>
								<div className='inner'>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											popup.current.open();
										}}>
										<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
									</div>
									<h2>{vid.snippet.title}</h2>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

			<Popup ref={popup}>
				{Youtube.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Youtube[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Popup>
		</>
	);
}

export default Vids;
// clickable : 아래 점점점 클릭
// spaceBetween : 슬라이드 사이 간격
// slidesPerView : 한 화면에 보일 패널 개수
// centeredSlides : 1번이 가운데로
// navigation : 좌우이동 화살표 - 모듈이 가장 위에 있어야 작동함
