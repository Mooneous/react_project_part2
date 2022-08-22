import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';

import { useRef, useEffect, useState } from 'react';
import Anime from '../../assets/Anime';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0); //1

	const getPos = () => {
		pos.current = []; //기존배열(해당 섹션 위치값)값 초기화(4개씩만담김)
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop); //push:값담기
		console.log(pos.current);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		return () => {
			window.removeEventListener('resize', getPos);
		};
	}, []);

	useEffect(() => {
		//2
		//console.log(index);//6. 세로버튼클릭하면콘솔에0,1,2,3찍힘
		new Anime(window, {
			//7
			prop: 'scroll',
			value: pos.current[Index],
			duration: 500,
		});
	}, [Index]);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			<Btns setIndex={setIndex} />
			//3
		</main>
	);
}

export default Main;
