import axios from "axios";

export const getData = async (url) => {
	try {
		const response = await axios.get(url);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
		return error.response;
	}
};

export const getTweets = async (url) => {
	try {
		const response = await axios.get(url, {
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
			},
		});
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
		return error.response;
	}
};
