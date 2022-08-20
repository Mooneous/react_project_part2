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
				<span>SEAOUL</span>
			</h1>

			<nav>
				<ul className='gnb gnbL'>
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
				</ul>
				<ul className='gnb gnbR'>
					<li>
						<NavLink to='#'>LOG IN</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={active}>
							MEMBERS
						</NavLink>
					</li>
				</ul>
			</nav>

			<FontAwesomeIcon icon={faBars} />
		</header>
	);
}

export default Header;
