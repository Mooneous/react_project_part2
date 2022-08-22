function Pics({ Scrolled, currentPos }) {
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
		</section>
	);
}

export default Pics;
