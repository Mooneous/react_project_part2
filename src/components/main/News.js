import { useEffect, useState } from 'react';

function News() {
	//로컬스토리지에 있는 데이터를 가져와서 다시 JSON객체로 parsing해서 리턴하는 함수
	const getLocalData = () => {
		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];
		const data = localStorage.getItem('post');
		//console.log(data);

		if (data) {
			return JSON.parse(data);
		} else {
			//console.log('더미 데이터 담기');
			return dummyPosts;
		}
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []); //처음 마운트 될때만 실행

	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<section id='news' className='myScroll'>
			<h1>News</h1>
			{Posts.map((post, idx) => {
				if (idx >= 3) return; //post 3개까지만 보여주고 끝~
				return (
					<article key={idx}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</article>
				);
			})}
		</section>
	);
}

export default News;
