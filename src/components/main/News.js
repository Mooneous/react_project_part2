import { useEffect, useState } from 'react';

function News() {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		let data = localStorage.getItem('post');
		data = JSON.parse(data);
		setPosts(data);
	}, []); //처음 마운트 될때만 실행

	return (
		<section id='news'>
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
