import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import Menu from './Menu';

function Header(props) {
	//menu컴포넌트에 전달해주는 토글 기능을 담을 참조객체 생성
	const menu = useRef(null);
	const active = { color: 'cornflowerblue' };

	return (
		<header className={props.type}>
			<h1>
				<Link to='/'>
					JO MALONE <br />
					<span>SEAOUL</span>
				</Link>
			</h1>

			<nav id='webGnb'>
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

			{/* 토글버튼 클릭시 참조된 토글함수 호출 */}
			<FontAwesomeIcon icon={faBars} onClick={() => menu.current.open()} />
			{/* 메뉴컴포넌트를 참조객체에 연결 (토글기능함수) */}
			<Menu ref={menu} />
		</header>
	);
}

export default Header;
