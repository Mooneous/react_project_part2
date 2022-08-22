import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';
import { useState, useEffect } from 'react';

function Main() {
	const [Scrolled, setScrolled] = useState(0);
	//5.스크롤드값에서포즈값빼기(지금상태는리센트플리커가오른쪽저멀리너무빨리가버려서안보임->#pics에 갔을때 위치값 0으로 만들고싶어)
	const [Pos, setPos] = useState([]);

	//9.Pos값받아지는지확인
	useEffect(() => {
		//console.log(Pos);
	}, [Pos]);

	useEffect(() => {
		//console.log(Scrolled);
	}, [Scrolled]);

	return (
		<>
			<Header type={'main'} />
			<Visual />
			<News />
			{/*2. */}
			{/*10. 필요한의세번째Pos값만전달*/}
			<Pics Scrolled={Scrolled} currentPos={Pos[2]} />
			<Vids />
			{/*6. setPos값 프롭스로전달 */}
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</>
	);
}

export default Main;
