//swiper연결 : npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<h1>Recent Youtube</h1>
			<Swiper
				modules={[Pagination, Navigation]}
				pagination={{ clickable: true }}
				navigation={true}
				spaceBetween={50}
				loop={true}
				slidesPerView={3}
				centeredSlides={true}>
				<SwiperSlide>
					<div className='inner'>1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>5</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
// clickable : 아래 점점점 클릭
// spaceBetween : 슬라이드 사이 간격
// slidesPerView : 한 화면에 보일 패널 개수
// centeredSlides : 1번이 가운데로
// navigation : 좌우이동 화살표 - 모듈이 가장 위에 있어야 작동함
