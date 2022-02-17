const fetch = require("node-fetch");

const handler = async function () {
	try {
		const response = await fetch(
			`https://api.twitter.com/2/tweets/search/recent?query=nft&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source`,
			{
				headers: {
					Accept: "application/json",
					//Twitter API token
					Authorization: `Bearer `,
				},
			}
		);
		if (!response.ok) {
			// NOT res.status >= 200 && res.status < 300
			return {statusCode: response.status, body: response.statusText};
		}
		const data = await response.json();

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		// output to netlify function log
		console.log(error);
		return {
			statusCode: 500,
			// Could be a custom message or object i.e. JSON.stringify(err)
			body: JSON.stringify({msg: error.message}),
		};
	}
};

module.exports = {handler};
