const fetch = require("node-fetch");
const secureEnv = require("secure-env");

const handler = async function () {
	try {
		if (!process.env.REACT_APP_AFT_ACTION_TWITTER_API_TOKEN_ENV_KEY) {
			throw new Error(
				"REACT_APP_AFT_ACTION_TWITTER_API_TOKEN_ENV_KEY has not been set as a variable in your environment."
			);
		} else {
			global.env = secureEnv({
				path: ".env.twitter-token.enc",
				secret: process.env.REACT_APP_AFT_ACTION_TWITTER_API_TOKEN_ENV_KEY,
			});
			if (!global.env) {
				throw new Error("Invalid key used for decryption");
			} else {
				if (!global.env.REACT_APP_BEARER_TOKEN) {
					throw new Error("No REACT_APP_BEARER_TOKEN for request tweets");
				} else {
					const response = await fetch(
						`https://api.twitter.com/2/tweets/search/recent?query=nft&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source`,
						{
							headers: {
								Accept: "application/json",
								Authorization: `Bearer ${global.env.REACT_APP_BEARER_TOKEN}`,
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
				}
			}
		}
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
