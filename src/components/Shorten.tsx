const Shorten = () => {
	return (
		<section className="shorten">
			<div className="container">
				<div className="shorten__content">
					<form className="form">
						<div className="input-control">
							<input type="text" placeholder="Shorten a link here..." />
							<p className="error-text">Please add a link</p>
						</div>

						<button className="btn" datatype="wide">
							Shorten it!
						</button>
					</form>
				</div>

				<div className="shorten__cards">
					<div className="shorten__card">
						<div className="actual-link">
							<span>https://www.diegoteileche.dev</span>
						</div>

						<hr className="line" />

						<div className="shorten__link">
							<a href="#" target="_blank">
								https://diee.te/5cH
							</a>
							<button className="btn" datatype="wide">
								Copy
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Shorten
