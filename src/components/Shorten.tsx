import { FormEvent, useState } from "react"

interface ShortenedUrlProps {
	originalUrl: string
	shortUrl: string
}

const Shorten = () => {
	const [url, setUrl] = useState("")
	const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrlProps[]>([])
	const [errorMessage, setErrorMessage] = useState("")
	const [loading, setLoading] = useState(false)
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (!url) {
			console.error("No url")
			setErrorMessage("Please add a link")
		}

		try {
			setLoading(true)

			const res = await fetch("/api/shortUrl", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams({ url }),
			})

			const data = await res.json()

			if (res.ok) {
				setShortenedUrls([
					...shortenedUrls,
					{
						originalUrl: url,
						shortUrl: data.shortUrl,
					},
				])

				setErrorMessage("")
				setUrl("")
			} else {
				console.error("Error: ", data.error)
			}
			console.log(data)
		} catch (error) {
			console.error("Error: ", error)
		} finally {
			setLoading(false)
		}
	}

	const handleCopy = (shortUrl: string, index: number) => {
		navigator.clipboard.writeText(shortUrl)
		setCopiedIndex(index)

		setTimeout(() => {
			setCopiedIndex(null)
		}, 2000)
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

						<button className="btn" datatype="wide" disabled={loading}>
							{loading ? "Loading..." : "Shorten it!"}
						</button>
					</form>
				</div>

				{shortenedUrls.length > 0 && (
					<div className="shorten__cards">
						{shortenedUrls.map((shortenedUrl, index) => (
							<div key={index} className="shorten__card">
								<div className="actual-link">
									<span>{shortenedUrl.originalUrl}</span>
								</div>

								<hr className="line" />

								<div className="shorten__link">
									<a href={`${shortenedUrl.shortUrl}`} target="_blank">
										{shortenedUrl.shortUrl}
									</a>
									<button
										className="btn"
										datatype="wide"
										onClick={() => handleCopy(shortenedUrl.shortUrl, index)}
									>
										{copiedIndex === index ? "Copied!" : "Copy"}
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default Shorten
