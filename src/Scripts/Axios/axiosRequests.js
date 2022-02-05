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
