import { useEffect } from 'react';

function Popup(props) {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			//popup컴포넌트가 언마운트(소멸)될때{콜백함수 내보낸다~}
			document.body.style.overflowY = 'auto';
		};
	}, []); //비어 있는 의존성 배열 : popup컴포넌트가 마운트(생성)될때 한번만 실행

	return (
		<aside className='popup'>
			<div className='con'>{props.children}</div>
			<span
				className='close'
				onClick={() => props.setOpen(false)}>
				{/* 닫기버튼을 클릭하면 setOpen의 스테이트값이 false로 변경됨*/}
				close
			</span>
		</aside>
	);
}

export default Popup;
