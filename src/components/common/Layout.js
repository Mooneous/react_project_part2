function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<figure>
				<h1>{props.name}</h1>
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
