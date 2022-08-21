import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);

	//글저장 함수
	const createPost = () => {
		//console.log('title', input.current.value);
		//console.log('content', textarea.current.value);
		{
			/*2. 함수실행 : deepcopy된 배열에 참조객체로부터 전달받은 제목,본문을 객체리터럴형식으로 만들어 스테이트 변경*/
		}
		setPosts([...Posts, { title: input.current.value, content: textarea.current.value }]);
	};

	//3. 빈배열에 해당 게시글 정보로 만들어진 객체 추가됨

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
				{/*1. 글저장버튼 클릭*/}
				<button onClick={createPost}>WRITE</button>
			</div>
			{/*4. 배열에 객체값이 추가가되면 반복을 돌면서 리턴문으로 목록 출력*/}
			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
