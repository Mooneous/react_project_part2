import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const [Members, setMembers] = useState([]); //초기값은빈배열[]:데이터 배열로 받아옴(axios받아올 state미리 만들어놓음)
	useEffect(() => {
		axios.get(process.env.PUBLIC_URL + '/DB/members.json').then((json) => {
			//console.log(json.data.members);
			setMembers(json.data.members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<section className='section01'>
				<h1>WE ARE</h1>
				<div className='articleWrap'>
					<p>
						Enthusiastic
						<br />
						individuals working
						<br />
						for extraordinary
						<br />
						brands.
					</p>
				</div>
			</section>

			<section className='section02'>
				<h1>FIND US </h1>
				<div className='articleWrap'>
					<div>
						<h2>Address</h2>
						<p>
							LOGO Inc.
							<br /> 1600 Amphitheatre Parkway Mountain View, CA 94043 Italy
						</p>
						<p>
							LOGO Atlanta.
							<br /> Millennium at Midtown 10 10th Street NE Suite 600 Atlanta, GA 30309
						</p>
					</div>
					<div>
						<h2>Begining</h2>
						<p>Collaborate with us Please knock on the door when you need it</p>
						<p>
							<span>Tel. +45 8612 7042</span>
							<br />
							<span>Fax. +45 4370 4205</span>
						</p>
					</div>

					<div>
						<h2>Collaboration</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ducimus nemo itaque
							quos assumenda nihil ipsa repellendus pariatur. Nihil, est?
						</p>
					</div>
				</div>
			</section>

			<section className='section03'>
				<h1>OUR TEAM</h1>
				<div className='articleWrap'>
					{Members.map((member, idx) => {
						return (
							<article key={idx}>
								<img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />

								<h2>{member.name}</h2>
								<p>{member.position}</p>
							</article>
						);
					})}
				</div>
			</section>
		</Layout>
	);
}

export default Department;
