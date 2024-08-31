import { FormEvent, useState } from "react"

const Shorten = () => {
	const [url, setUrl] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (!url) {
			console.error("No url")
			setErrorMessage("Please add a link")
		}

		try {
			const res = await fetch("/api/shortUrl", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: JSON.stringify({ url }),
			})

			console.log(res)
		} catch (error) {
			console.error("Error: ", error)
		}
	}

	return (
		<section className="shorten">
			<div className="container">
				<div className="shorten__content">
					<form onSubmit={handleSubmit} className="form">
						<div className="input-control">
							<input
								type="text"
								value={url}
								onChange={(e) => setUrl(e.target.value)}
								className={`${errorMessage ? "error-input" : ""}`}
								placeholder="Shorten a link here..."
							/>
							{errorMessage && <p className="error-text">{errorMessage}</p>}
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
