//swiper연결 : npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<h1>Recent Youtube</h1>
			<Swiper
				pagination={{ clickable: true }}
				modules={[Pagination]}
				spaceBetween={50}
				loop={true}
				slidesPerView={3}
				centeredSlides={true}>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
				<SwiperSlide>4</SwiperSlide>
				<SwiperSlide>5</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
// clickable : 아래 점점점 클릭
// spaceBetween : 슬라이드 사이 간격
// slidesPerView : 한 화면에 보일 패널 개수
// centeredSlides : 1번이 가운데로
