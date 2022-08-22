import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';

import { useRef, useEffect } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	//3.
	const getPos = () => {
		//4.
		pos.current = []; //기존배열(해당 섹션 위치값)값 초기화(4개씩만담김)
		//1.
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop); //push:값담기
		console.log(pos.current);
	};
	//2.
	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);

		return () => {
			window.removeEventListener('resize', getPos);
		};
	}, []);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
		</main>
	);
}

export default Main;
