import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);
	const [Allowed, setAllowed] = useState(true);

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
		return JSON.parse(data);
		// if (data) {
		// 	//data있으면
		// 	return JSON.parse(data); //JSON으로 갖고와
		// } else {
		// 	return dummyPosts; //아니면 dummyPosts 보여줘~
		// }
	};

	//초기 Posts스테이트에 로컬스토리지의 데이터를 가져와서 저장
	const [Posts, setPosts] = useState(getLocalData());

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
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]); //새로 입력한 글이 상단에 뜨도록 자리바꿈
		resetForm();
	};

	//글삭제 함수
	const deletePost = (index) => {
		const newPosts = Posts.filter((_, idx) => idx !== index); //Posts중에 순번값과 인덱스값이 같지 않은 글만 필터링해줘(순번값과 인덱스값이 같은 글은 반환되지 않음)
		setPosts(newPosts);
	};

	//실제 글 수정 함수
	const updatePost = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			resetForm();
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
		setAllowed(true);
	};

	//글 수정모드 변경함수
	const enableUpdate = (index) => {
		if (!Allowed) return; //Allowed값이 true가 아니면 setPosts하지말구 여기서 끝내..
		setAllowed(false);

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	//글 출력모드 변경함수
	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	//Posts값이 변경될때마다 로컬 스토리지에 기존 데이터를 다시 문자열로 변환해서 저장
	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]); //Posts값이 바뀔때마다

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea cols='30' rows='3' placeholder='본문을 입력하세요' ref={textarea}></textarea>
				<br />
				<div className='btnSet'>
					<button>CANCEL</button>
					<button onClick={createPost}>WRITE</button>
				</div>
			</div>

			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								//수정모드
								<>
									<div className='editTxt'>
										<input type='text' defaultValue={post.title} ref={inputEdit} />
										<br />
										<textarea
											name=''
											id=''
											cols='30'
											rows='3'
											ref={textareaEdit}
											defaultValue={post.content}></textarea>
										<br />
										<div className='btnSet'>
											<button onClick={() => disableUpdate(idx)}>CANCEL</button>
											<button onClick={() => updatePost(idx)}>UPDATE</button>
										</div>
									</div>
								</>
							) : (
								//출력모드
								<>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>

									<div className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										{/* 각 게시글 목록을 생성할때 삭제버튼까지 같이 생성, 삭제버튼 클릭시 삭제하려고 하는 해당 순번을 인수로 전달 */}
										<button
											onClick={() => {
												deletePost(idx);
											}}>
											DELETE
										</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
