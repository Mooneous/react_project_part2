import { NavLink, Link } from 'react-router-dom';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Menu() {
	const [Open, setOpen] = useState(true);
	const active = { color: '#fcf9ee' };
	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobileGnb'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0 } }}
					exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}>
					<motion.h1
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } }}
						exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}>
						<Link to='/'>
							JO MALONE <br />
							<span>SEAOUL</span>
						</Link>
					</motion.h1>
					<ul>
						<li>
							<NavLink to='/community' activeStyle={active}>
								COMMUNITY
							</NavLink>
						</li>
						<li>
							<NavLink to='/department' activeStyle={active}>
								DEPARTMENT
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeStyle={active}>
								GALLERY
							</NavLink>
						</li>
						<li>
							<NavLink to='/location' activeStyle={active}>
								LOCATION
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeStyle={active}>
								YOUTUBE
							</NavLink>
						</li>
						<li>
							<NavLink to='/members' activeStyle={active}>
								MEMBERS
							</NavLink>
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

export default Menu;
