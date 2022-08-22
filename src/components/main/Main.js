//세로버튼 클릭시 인덱스 스테이트값이 변하지 않아 다른영역에서 첫번째영역으로 가지 못하는 오류 발생 -> Btns.js파일에서 실행하는게 더 효율적이라 판단 코드 옮기고 수정

import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';

function Main() {
	return (
		<>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			<Btns />
		</>
	);
}

export default Main;
