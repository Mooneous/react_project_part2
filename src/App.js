import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFlickr } from './redux/flickrSlice';
import { fetchMembers } from './redux/memberSlice';
import { fetchYoutube } from './redux/youtubeSlice';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//main
import Main from './components/main/Main';
//sub
import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMembers());
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'user', user: '164021883@N04' }));
	}, []);

	return (
		<>
			{/* Switch : 중복되는 라우터명이 있을때 처음 연결된 라우터 하나만 연결 */}
			<Switch>
				{/* 메인페이지 전용 라우터 */}
				<Route exact path='/' component={Main} />
				{/* <Route exact path='/'>
					<Header type={'main'} />
				</Route> */}

				{/* 서브페이지 전용 header 라우터 */}
				<Route path='/' render={() => <Header type={'sub'} />} />
				{/* <Route path='/'>
					<Header type={'sub'} />
				</Route> */}
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/members' component={Members} />
			<Footer />
		</>
	);
}

export default App;
