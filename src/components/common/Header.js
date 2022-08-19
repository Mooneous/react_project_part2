import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

function Header(props) {
	const active = { color: 'cornflowerblue' };

	return (
		<header className={props.type}>
			<h1>
				<Link to='/'>JO MALONE</Link>
				<br />
				<span>LONDON</span>
			</h1>

			<nav>
				<ul className='gnb gnbL'>
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
						<NavLink to='/members' activeStyle={active}>
							Members
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
				</ul>
				<ul className='gnb gnbR'>
					<li>
						<NavLink to='#'>LogIn</NavLink>
					</li>
					<li>
						<NavLink to='#'>SignUp</NavLink>
					</li>
				</ul>
			</nav>

			<FontAwesomeIcon icon={faBars} />
		</header>
	);
}

export default Header;
