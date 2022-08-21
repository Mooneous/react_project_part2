import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);

	//기존 폼요소 초기화 함수
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//글저장 함수
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			return alert('제목과 본문을 모두 입력하세요');
		}
		//console.log('title', input.current.value);
		//console.log('content', textarea.current.value);
		setPosts([...Posts, { title: input.current.value, content: textarea.current.value }]);
		resetForm();
	};

	//글삭제 함수
	const deletePost = (index) => {
		const newPosts = Posts.filter((_, idx) => idx !== index); //Posts중에 순번값과 인덱스값이 같지 않은 글만 필터링해줘(순번값과 인덱스값이 같은 글은 반환되지 않음)
		setPosts(newPosts);
	};

	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholdler='제목을 입력하세요' ref={input} />
				<br />
				<textarea cols='30' rows='3' placeholder='본문을 입력하세요' ref={textarea}></textarea>
				<br />
				<button>CANCEL</button>
				<button onClick={createPost}>WRITE</button>
			</div>
			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
							<div className='btnSet'>
								<button>EDIT</button>
								{/* 각 게시글 목록을 생성할때 삭제버튼까지 같이 생성, 삭제버튼 클릭시 삭제하려고 하는 해당 순번을 인수로 전달 */}
								<button
									onClick={() => {
										deletePost(idx);
									}}>
									DELETE
								</button>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
