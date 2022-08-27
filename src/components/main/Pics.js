import { useSelector } from 'react-redux';

function Pics({ Scrolled, currentPos }) {
	const Pics = useSelector((store) => store.flickr.data);

	const position = Scrolled - currentPos || 0;
	//console.log(position);
	return (
		<section id='pics' className='myScroll'>
			<h1
				style={{
					left: position * 4,
				}}>
				Flickr
			</h1>
			<h2
				style={{
					left: position / 2,
				}}>
				GALLERY
			</h2>
			{/*position 단위가 천이라서 나누기 천 */}
			<div
				className='box'
				style={{
					transform: `scale(${1 + position / 1000})`,
					opacity: 1 - position / 1000,
				}}></div>

			<ul>
				{Pics.map((pic, idx) => {
					if (idx >= 5) return;
					return (
						<li key={pic.id}>
							<img
								src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
								alt={pic.title}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default Pics;
