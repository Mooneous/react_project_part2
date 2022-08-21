import Layout from '../common/Layout';

function Community() {
	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholdler='제목을 입력하세요' />
				<br />
				<textarea cols='30' rows='3' placeholder='본문을 입력하세요'></textarea>
				<br />
				<button>CANCEL</button>
				<button>WRITE</button>
			</div>
		</Layout>
	);
}

export default Community;
