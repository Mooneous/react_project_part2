//3.props전달 - Scrolled
//11.props전달 - currentPos
function Pics({ Scrolled, currentPos }) {
	//12. position = 전체 스크롤 거리값에서 해당 섹션 요소의 세로위치값을 뺀값
	//해당박스가 활성화 된순간의 position값은 0이므로 좀더 정밀한 모션작업가능
	//currentPos가 언디파인이일때대비 값0으로찍히게초기화
	const position = Scrolled - currentPos || 0;
	console.log(position);
	return (
		<section id='pics' className='myScroll'>
			{/*4.style값주기 */}
			{/*13. Scrolled->position으로*/}
			<h1
				style={{
					left: position,
				}}>
				Recent Flickr
			</h1>
		</section>
	);
}

export default Pics;
