import Layout from '../common/Layout';
import { useSelector } from 'react-redux';

function Department() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.members.data);

	return (
		<Layout name={'Department'}>
			<div className='sectionCon'>
				<section className='section01'>
					<h1>We Are</h1>
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
					<h1>Find Us </h1>
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
					<h1>Our Team</h1>
					<div className='articleWrap'>
						{Members.map((member, idx) => {
							return (
								<article key={idx}>
									<img src={`${path}/img/${member.pic}`} alt={member.name} />

									<h2>{member.name}</h2>
									<p>{member.position}</p>
								</article>
							);
						})}
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Department;
