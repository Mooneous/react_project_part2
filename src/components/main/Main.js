import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';
import { useState, useEffect } from 'react';

function Main() {
	//1.
	const [Scrolled, setScrolled] = useState(0);

	useEffect(() => {
		//5.
		console.log(Scrolled);
	}, [Scrolled]);

	return (
		<>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			{/*2. */}
			<Btns setScrolled={setScrolled} />
		</>
	);
}

export default Main;
