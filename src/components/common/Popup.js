import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
//framer-motion설치 : npm i framer-motion@6 (최신버전아님,리액트버전이랑안맞어)
import { motion, AnimatePresence } from 'framer-motion';

const Popup = forwardRef(({ children }, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	// Open인스테이트이면(팝업되면) Y스크롤숨겨줭, 팝업아니면 Y스크롤 맘대로혀~
	useEffect(() => {
		Open ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
	}, [Open]);

	return (
		<>
			{/* 위치중요>..<Open안아니아니되오*/}
			<AnimatePresence>
				{/* Open 스테이트값이 true일때만 내부 컨텐츠 출력 */}
				{Open && (
					<motion.aside
						className='popup'
						initial={{ opacity: 0, scale: 0, x: '100%', rotate: '220deg' }}
						animate={{
							opacity: 1,
							scale: 1,
							x: '0%',
							rotate: '0deg',
							transition: { duration: 0.5 },
						}}
						exit={{
							opacity: 0,
							scale: 0,
							x: '100%',
							rotate: '220deg',
							transition: { duration: 0.5 },
						}}>
						<div className='con'>{children}</div>
						<span className='close' onClick={() => setOpen(false)}>
							close
						</span>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
});

export default Popup;

/*
	forwardRef hook을 이용해서 자식 컴포넌트의 데이터를 부모컴포넌트로 역으로 전달방법
	1- 기존의 컴포넌트 함수를 대입형(화살표) 함수로 변경
	2- 해당 화살표함수를 forwardRef의 인수로 전달
	3- forwardRef로 전달되는 화살표함수의 두번째 파라미터로 ref 추가
	4- forwardRef안쪽에 useImperativeHandle함수 호출
	5- 해당함수를 무조건!! 객체로 반환해서 해당 객체값을 부모컴포넌트로 전달
	6- 부모컴포넌트에서 useRef로 forwardRef로 전달되는 자식 컴포넌트 자체를 참조
	7- 참조 객체는 useImperativeHandle로 리턴하는 객체를 지칭
*/
