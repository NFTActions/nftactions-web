import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {TwitterTweetEmbed} from "react-twitter-embed";
import styled from "styled-components";

import {StyledIcon} from "../../StyledComponents";
import {SocialPicks, TradingPicks} from "./";

const StyledMain = styled.main`
	background-color: #000;
	height: 100%;
`;

export const Main = () => {
	const [data, setData] = useState({data: []});
	useEffect(() => {
		const fetchData = () => {
			fetch("/.netlify/functions/handler", {
				headers: {
					accept: "Accept: application/json",
				},
			})
				.then((x) => x.json())
				.then((data) => {
					setData(data);
				})
				.catch((error) => console.log(error));
		};
		fetchData();
	}, []);
	return (
		<StyledMain>
			<TradingPicks />
			<SocialPicks>
				{data?.data?.length ? (
					data.data
						.filter((tweet, index) => index <= 4)
						.map((tweet) => (
							<TwitterTweetEmbed
								key={tweet.id}
								tweetId={tweet.id}
								options={{height: 200}}
								placeholder={<StyledIcon icon={faSpinner} pulse />}
							/>
						))
				) : (
					<StyledIcon icon={faSpinner} pulse />
				)}
			</SocialPicks>
		</StyledMain>
	);
};
