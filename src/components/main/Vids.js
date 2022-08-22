//swiper연결 : npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<h1>Recent Youtube</h1>
			<Swiper>
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
