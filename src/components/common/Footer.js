import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className='upper'>
				<h1>
					<Link to='/'>JO MALONE</Link>
					<span>SEAOUL</span>
				</h1>
				<ul className='sns'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faGithub} />
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebook} />
					</li>
				</ul>
			</div>
			<div className='mid'>
				<div className='midWrap'>
					<dl>
						<dt>
							Company <span>▼</span>
						</dt>
						<dd>About</dd>
						<dd>Contact</dd>
						<dd>Brand</dd>
						<dd>Careers</dd>
					</dl>
					<dl>
						<dt>
							The Goods <span>▼</span>
						</dt>
						<dd>Membership</dd>
						<dd>Shop</dd>
						<dd>Free Drops</dd>
						<dd>Gift Cards</dd>
						<dd>Sales</dd>
						<dd></dd>
					</dl>
					<dl>
						<dt>
							Resources <span>▼</span>
						</dt>
						<dd>Collections</dd>
						<dd>Help Center</dd>
						<dd>Licenses</dd>
					</dl>
					<dl>
						<dt>
							Payment <span>▼</span>
						</dt>
						<dd>Delivery & Returns</dd>
						<dd>Discount</dd>
						<dd>FAQ's</dd>
						<dd></dd>
					</dl>
				</div>
			</div>
			<div className='lower'>
				<ul className='policy'>
					<li>Terms & Conditions</li>
					<li>Privacy Policy</li>
					<li>Cookie Policy</li>
				</ul>
				<p>&copy; 2022 SEAOUL. All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
