const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="flex">
					<div className="hero__image">
						<img
							src="/hero-illustration.avif"
							alt="ShortCraft Hero Section Image"
						/>
					</div>

					<div className="hero__content">
						<h1>More than just shorter links</h1>
						<p>
							Build your brand&apos;s recognition and get detailed insights on
							how your links are performing
						</p>
						<a href="#" datatype="narrow" className="btn">
							Get Started
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
