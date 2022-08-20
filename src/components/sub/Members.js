import Layout from '../common/Layout';

function Members() {
	return (
		<Layout name={'Members'}>
			<div className='formCon'>
				<form>
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
												/>
												<span className='err'></span>
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
												/>
												<span className='err'></span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='pwd2'>RE-PASSWORD</label>
											</th>
											<td>
												<input type='password' name='pwd2' id='pwd2' placeholder='● ● ● ● ● ● ●' />
												<span className='err'></span>
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
													id='email1'
													name='email1'
													placeholder='Write Your Email'
												/>
												<span>@</span>
												<input type='text' id='email2' name='email2' placeholder='Direct input' />
												<span className='err'></span>
												<select name='emailDomain' id='emailDomain'>
													<option value=''>직접입력</option>
													<option value='naver'>naver.com</option>
													<option value='daum'>daum.net</option>
													<option value='gmail'>gmail.com</option>
													<option value='kakao'>kakao.com</option>
												</select>
												<span className='err'></span>
											</td>
										</tr>
										{/* gender */}
										<tr>
											<th scope='row'>GENDER</th>
											<td>
												<input type='radio' id='male' name='gender' />
												<label htmlFor='male'>MALE</label>

												<input type='radio' id='female' name='gender' />
												<label htmlFor='female'>FEMALE</label>

												<span className='err'></span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						{/*필수약관동의*/}
						<div className='formWrap'>
							{/*이용약관동의 */}
							<h1>Service Agreement</h1>
							<div className='formSec formSec2'>
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
									<input type='checkbox' name='agree' id='agree' />
									<label htmlFor='agree'>I agree.</label>
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
									<input type='checkbox' name='agree' id='agree' />
									<label htmlFor='agree'> I agree.</label>
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
									<input type='checkbox' id='email' name='agree' />
									<label htmlFor='agree'>E-MAIL</label>

									<input type='checkbox' id='sms' name='agree' />
									<label htmlFor='disagree'>SMS</label>

									<span className='err'></span>
								</div>
							</div>
						</div>

						{/* btnSet */}
						<div className='btnWrap'>
							<input type='reset' value='CANCEL' />
							<input type='submit' value='SUBMIT' />
						</div>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

export default Members;
