import { Config } from "@netlify/functions"

const apiKey = process.env.URL_KEY

export default async (req: Request) => {
	const urlParams = new URLSearchParams(await req.text())
	const url = urlParams.get("url")

	if (!url) {
		return new Response(JSON.stringify({ error: "URL is required" }), {
			status: 400,
			headers: {
				"Content-Type": "application/json",
			},
		})
	}

	const inputBody = JSON.stringify({
		url: url,
		expiry: "5m",
	})

	if (!apiKey) {
		return new Response(JSON.stringify({ error: "API Key is required" }), {
			status: 400,
			headers: {
				"Content-Type": "application/json",
			},
		})
	}

	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
		"x-api-key": apiKey,
	}

	try {
		const res = await fetch("https://api.manyapis.com/v1-create-short-url", {
			method: "POST",
			headers: headers,
			body: inputBody,
		})

		const data = await res.json()

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		})
	} catch (error) {
		console.error("Error: ", error)
		return new Response(JSON.stringify({ error: "URL shorten failed" }), {
			status: 400,
			headers: {
				"Content-Type": "application/json",
			},
		})
	}
}

export const config: Config = {
	path: "/api/*",
}
