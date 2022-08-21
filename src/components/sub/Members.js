import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const history = useHistory();
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		domain: '',
		emailDomain: '',
		gender: null,
		agreeSer: null,
		agreePer: null,
		agreeMkt: null,
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	//인증처리 함수
	const check = (value) => {
		const errs = {};

		//인증처리할 조건 정규표현식
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+\]]/;

		//userid 인증처리
		if (value.userid.length < 5) {
			errs.userid = 'Use 5 or more characters.';
		}

		//pwd1 인증처리
		if (
			value.pwd1.length < 6 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = 'Use 6 or more characters with a mix of letters, numbers and symbols.';
		}
		//pwd2 인증처리
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = 'Enter the same password again.';
		}

		//email 인증처리
		if (value.email.length < 5) {
			errs.email = 'Use 5 or more characters.';
		}
		//domain 인증처리
		if (!/./.test(value.domain)) {
			errs.domain = 'Check your email domain is correct.';
		}
		//emailDomain 인증처리
		if (value.emailDomain === '') {
			errs.emailDomain = 'Choose your email-domain.';
		}

		//gender 인증처리
		if (!value.gender) {
			errs.gender = 'Choose your gender.';
		}
		//checkbox 인증처리
		if (!value.agreeSer) {
			errs.agreeSer = 'Please checking a required option!';
		}
		if (!value.agreePer) {
			errs.agreePer = 'Please checking a required option!';
		}
		if (!value.agreeMkt) {
			errs.agreeMkt = 'Choose more than one.';
		}
		return errs;
	};

	const handleSubmit = (e) => {
		e.preventDefault(); //서버전송 방지
		setErr(check(Val)); //인증검사후 에러 스테이트에 결과 담기
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		//console.log('name', name);
		//console.log('value', value);
		//키값을 변수로 지정 [키값] - es6
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked; //true or false
		setVal({ ...Val, [name]: isCheck });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el) => {
			if (el.checked) isCheck = true; //하나라도 체크되어 있으면 true값 전달
		});
		setVal({ ...Val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	useEffect(() => {
		const len = Object.keys(Err).length; //에러객체의 키값을 배열로 반환해주는 함수
		if (len === 0 && Submit) {
			//에러메세지가 하나도 없고 Submit값이 true일때
			alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');
			history.push('/'); //메인페이지로 강제 이동
		}
	}, [Err]); //에러스테이트가 변경될때마다 실행

	return (
		<Layout name={'Members'}>
			<div className='formCon'>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>회원가입양식폼</legend>
						{/*회원정보입력*/}
						<div className='formWrap'>
							<h1>Basic Information</h1>
							<div className='formSec formSec1'>
								<table>
									<caption className='hidden'>회원가입 정보 입력</caption>
									<tbody>
										{/* userid */}
										<tr>
											<th scope='row'>
												<label htmlFor='userid'>USER ID</label>
											</th>
											<td>
												<input
													type='text'
													placeholder='Please Write Your ID'
													name='userid'
													id='userid'
													//value={Val.userid}
													onChange={handleChange}
												/>
												<span className='err'>{Err.userid}</span>
											</td>
										</tr>

										{/* password */}
										<tr>
											<th scope='row'>
												<label htmlFor='pwd1'>PASSWORD</label>
											</th>
											<td>
												<input
													type='password'
													name='pwd1'
													id='pwd1'
													//value={Val.pwd1}
													placeholder='● ● ● ● ● ● ●'
													onChange={handleChange}
												/>
												<span className='err'>{Err.pwd1}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='pwd2'>RE-PASSWORD</label>
											</th>
											<td>
												<input
													type='password'
													name='pwd2'
													id='pwd2'
													//value={Val.pwd2}
													placeholder='● ● ● ● ● ● ●'
													onChange={handleChange}
												/>
												<span className='err'>{Err.pwd2}</span>
											</td>
										</tr>

										{/* email */}
										<tr>
											<th scope='row'>
												<label htmlFor='email'>E-MAIL</label>
											</th>
											<td>
												<input
													type='text'
													id='email'
													name='email'
													placeholder='Email address'
													onChange={handleChange}
												/>
												<span>@</span>
												<input type='text' id='domain' name='domain' placeholder='gmail.com' />
												<select name='emailDomain' id='emailDomain' onChange={handleSelect}>
													<option value=''>Direct input</option>
													<option value='naver'>naver.com</option>
													<option value='daum'>daum.net</option>
													<option value='gmail'>gmail.com</option>
													<option value='kakao'>kakao.com</option>
												</select>
												<span className='err'>{Err.email}</span>
												<span className='err'>{Err.domain}</span>
												<span className='err'>{Err.emailDomain}</span>
											</td>
										</tr>

										{/* gender */}
										<tr>
											<th scope='row'>GENDER</th>
											<td>
												<input type='radio' id='male' name='gender' onChange={handleRadio} />
												<label htmlFor='male'>MALE</label>

												<input type='radio' id='female' name='gender' onChange={handleRadio} />
												<label htmlFor='female'>FEMALE</label>

												<span className='err'>{Err.gender}</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						{/*필수약관동의*/}
						<div className='formWrap'>
							<h1>
								Service Agreement
								<br />
								<span>(Required)</span>
							</h1>
							<div className='formSec formSec2'>
								{/*이용약관동의 */}
								<h2>
									<label htmlFor='terms'>
										Terms<span>of</span> service
									</label>
								</h2>
								<div className='terms'>
									<ul>
										<li>
											<b>1. Privacy</b>
											<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis.
										</li>
										<br />
										<li>
											<b>2. Products and Services for Personal Use</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit molestiae commodi aliquid perferendis et dolor. Dolore facilis
											tempore obcaecati repudiandae laudantium vero dolores molestias quam nobis!
											Aut reprehenderit enim cumque.
										</li>
										<br />
										<li>
											<b>3. Purchase Related Policies and Procedures</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debi.
										</li>
										<br />
										<li>
											<b>4. Accuracy of Information</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit moles. dolores molestias quam nobis! Aut reprehenderit enim
											cumque.
										</li>
										<br />
										<li>
											<b>5. Intellectual Property</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit moles. dolores molestias quam nobis! Aut reprehenderit enim
											cumque.
										</li>
									</ul>
								</div>
								<div className='agreement'>
									<input type='checkbox' name='agreeSer' id='agreeSer' onChange={handleCheck} />
									<label htmlFor='agreeSer'>I agree</label>

									<span className='err'>{Err.agreeSer}</span>
								</div>

								{/*개인정보동의 */}
								<h2>
									<label htmlFor='terms'>
										Personal Information Collection<span>and</span> Usage
									</label>
								</h2>
								<div className='terms'>
									<ul>
										<li>
											<b>1. Range of personal impormation</b>
											<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis. vel sed inventore ad earum. Atque expedita voluptatibus
											necessitatibus, a, quasi ipsum quia, culpa eligendi saepe accusantium ab earum
											rerum deserunt ad veniam optio incidunt ipsam. Voluptates harum rem ipsam,
											mollitia omnis illum at odio, debitis.
										</li>
										<br />
										<li>
											<b>2. Personal Use</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit molestiae commodi aliquid perferendis et dolor. Dolore facilis
											tempore obcaecati repudiandae laudantium vero dolores molestias quam nobis!
											Aut reprehenderit enim cumque.
										</li>
										<br />
										<li>
											<b>3. Purchase Related Policies and Procedures</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debi.
										</li>
										<br />
										<li>
											<b>4. Accuracy of Information</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit moles. dolores molestias quam nobis! Aut reprehenderit enim
											cumque.
										</li>
										<br />
										<li>
											<b>5. Intellectual Property</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit moles. dolores molestias quam nobis! Aut reprehenderit enim
											cumque.
										</li>
									</ul>
								</div>
								<div className='agreement'>
									<input type='checkbox' name='agreePer' id='agreePer' onChange={handleCheck} />
									<label htmlFor='agreePer'> I agree</label>

									<span className='err'>{Err.agreePer}</span>
								</div>
							</div>
						</div>

						{/*마케팅정보동의*/}
						<div className='formWrap'>
							{/*마케팅수신동의-checkbox */}
							<h1>Consent to Marketing</h1>
							<div className='formSec formSec3'>
								<h2>
									<label htmlFor='terms'>Receive Marketing Info</label>
								</h2>
								<div className='terms'>
									<ul>
										<li>
											<b>1. About Marketing</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis. vel sed inventore ad earum. Atque expedita voluptatibus
											necessitatibus, a, quasi ipsum quia, culpa eligendi saepe accusantium ab earum
											rerum deserunt ad veniam optio incidunt ipsam. Voluptates harum rem ipsam,
											mollitia omnis illum at odio, debitis.ntore ad earum. Atque expedita
											voluptatibus necessitatibus, a, quasi ipsum quia, culpa eligendi saepe
											accusantium ab earum rerum deserunt ad veniam optio incidunt ipsam. Voluptates
											harum rem ipsam, mollitia omnis illum at odio, debitis. vel sed inventore ad
											earum. Atque expedita voluptatibus necessitatibus, a, quasi ipsum quia, c
										</li>
										<br />
										<li>
											<b>2. Personal Use </b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit molestiae commodi aliquid perferendis et dolor. Dolore facilis
											tempore obcaecati repudiandae laudantium vero dolores molestias quam nobis!
											Aut reprehenderit enim cumque.
										</li>
										<br />
										<li>
											<b>3. Purchase Related Policies and Procedures</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debi.
										</li>
										<br />
										<li>
											<b>4. Accuracy of Information</b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit moles. dolores molestias quam nobis! Aut reprehenderit enim
											cumque.
										</li>
										<br />
										<li>
											<b>5. Intellectual Property </b>
											<br />
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas,
											laboriosam eaque eius vitae quo optio aperiam facilis minus, assumenda fugit
											id, vel sed inventore ad earum. Atque expedita voluptatibus necessitatibus, a,
											quasi ipsum quia, culpa eligendi saepe accusantium ab earum rerum deserunt ad
											veniam optio incidunt ipsam. Voluptates harum rem ipsam, mollitia omnis illum
											at odio, debitis ab nobis, soluta tenetur qui dicta voluptatum! Odit nulla
											nobis numquam, nihil, beatae vitae tenetur, dolores esse dignissimos corrupti
											repellat! Sit moles. dolores molestias quam nobis! Aut reprehenderit enim
											cumque.
										</li>
									</ul>
								</div>

								<div className='agreement agreeMkt'>
									<input type='checkbox' id='E-MAIL' name='agreeMkt' onChange={handleCheck} />
									<label htmlFor='E-MAIL'>E-MAIL</label>

									<input type='checkbox' id='SMS' name='agreeMkt' onChange={handleCheck} />
									<label htmlFor='SMS'>SMS</label>

									<input type='checkbox' id='LATER' name='agreeMkt' onChange={handleCheck} />
									<label htmlFor='LATER'>It's OK</label>
									<span className='err'>{Err.agreeMkt}</span>
								</div>
							</div>
						</div>

						{/* btnSet */}
						<div className='btnWrap'>
							<input type='reset' value='CANCEL' />
							<input type='submit' value='SUBMIT' onClick={() => setSubmit(true)} />
						</div>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

export default Members;
