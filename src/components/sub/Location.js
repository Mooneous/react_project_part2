import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window; //window에 있는 kakao객체를 비구조할당으로 가져오기~안그럼지도못가져와ㅠㅠ
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

	// 마커의 위치 정보값
	const markerPosition = option.center;

	// 마커의 이미지 정보값(저장위치경로, 이미지크기, 이미지 안에서의 마커 좌표 )
	const imgSrc = process.env.PUBLIC_URL + '/img/marker1.png';
	const imgSize = new kakao.maps.Size(232, 99);
	const imgOpt = {
		offset: new kakao.maps.Point(116, 99),
	};

	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOpt);

	// 위 정보값을 통해 마커생성
	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	//가상돔 요소가 브라우저에 마운트(생성) 되면
	useEffect(() => {
		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		//var map = new kakao.maps.Map(mapContainer, mapOption);
		const map_instance = new kakao.maps.Map(container.current, option); //가상돔이니까 container아니고,container.current!
		// 마커가 지도 위에 표시되도록 설정합니다
		//marker.setMap(map);
		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			<ul>
				<li>
					<div className='iconWrap'>
						<FontAwesomeIcon icon={faLocationDot} className='icon' />
					</div>

					<p>
						Our Location<span>1600 Amphitheatre Parkway Mountain View, CA 94043 Italy</span>
					</p>
				</li>
				<li>
					<div className='iconWrap'>
						<FontAwesomeIcon icon={faEnvelope} className='icon' />
					</div>

					<p>
						Email Us<span>consult8282@logo.com</span>
					</p>
				</li>
				<li>
					<div className='iconWrap'>
						<FontAwesomeIcon icon={faMobileButton} className='icon' />
					</div>

					<p>
						Call Us<span>+45 8612 7042</span>
					</p>
				</li>
			</ul>

			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
