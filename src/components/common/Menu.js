import { NavLink, Link } from 'react-router-dom';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	const active = { color: '#fcf9ee' };

	//부모컴포넌트의 참조객체에 담길 객체를 리턴 (Open값을 토글시켜주는 함수)
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobileGnb'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0 } }}
					exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}>
					<div className='navWrap'>
						<motion.h1
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } }}
							exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}>
							<Link to='/'>
								JO MALONE <br />
								<span>SEAOUL</span>
							</Link>
						</motion.h1>
						<div className='exit' onClick={() => setOpen(false)}></div>
						<ul>
							<li>
								<NavLink to='/community' activeStyle={active}>
									Community
								</NavLink>
							</li>
							<li>
								<NavLink to='/department' activeStyle={active}>
									Department
								</NavLink>
							</li>
							<li>
								<NavLink to='/gallery' activeStyle={active}>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to='/location' activeStyle={active}>
									Location
								</NavLink>
							</li>
							<li>
								<NavLink to='/youtube' activeStyle={active}>
									Youtube
								</NavLink>
							</li>
							<li>
								<NavLink to='/members' activeStyle={active}>
									Members
								</NavLink>
							</li>
						</ul>
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
