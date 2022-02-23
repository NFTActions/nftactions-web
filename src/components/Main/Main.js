import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {TwitterTweetEmbed} from "react-twitter-embed";
import styled from "styled-components";

import {getData, getTweets} from "../../Scripts/Axios/axiosRequests";
import {baseUrl} from "../../Scripts/Constants";
import {StyledIcon} from "../../StyledComponents";
import {SocialPicks, TradingPicks} from "./";

const StyledMain = styled.main`
	background-color: #000;
	height: 100%;
`;

const StyleTweetWrapper = styled.div`
	padding: 5px;
	overflow: auto;
`;

export const Main = () => {
	const [data, setData] = useState({data: []});
	const [collections, setCollections] = useState([]);
	const saleCountCutoff = 1;
	const numberOfCollectionsToShow = 20;

	useEffect(() => {
		async function fetchData() {
			// mock collection summary will be placed here
			const response = await getData(`${baseUrl}v1/activity/summary`);
			const filteredCollections = response.collections
				.filter(
					(responseCollection) => responseCollection.count >= saleCountCutoff
				)
				.slice(0, numberOfCollectionsToShow);
			setCollections(filteredCollections);

			const names = filteredCollections
				.slice(0, 5)
				.map((collection) => collection.name);
			// mock tweets will be placed here
			await Promise.all(
				names.map((name) =>
					getTweets(
						`/2/tweets/search/recent?query=${name}&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source`
					)
				)
			).then((responses) => {
				const data = responses
					.filter((response) => response?.data)
					.map((response) => {
						return response.data[0];
					});
				if (data.length < 5) {
					const moreData = responses
						.filter((response) => response?.data)[0]
						.data.slice(1, 5 - data.length + 1);
					setData([...data, ...moreData]);
				} else {
					setData(data);
				}
			});
		}

		fetchData();
	}, []);

	return (
		<StyledMain>
			{collections.length ? (
				<TradingPicks collections={collections} />
			) : (
				<StyledIcon icon={faSpinner} pulse />
			)}
			<SocialPicks>
				{data?.length ? (
					data
						.filter((tweet, index) => index <= 4)
						.map((tweet) => (
							<StyleTweetWrapper key={tweet.id}>
								<TwitterTweetEmbed
									tweetId={tweet.id}
									options={{height: 200}}
									placeholder={<StyledIcon icon={faSpinner} pulse />}
								/>
							</StyleTweetWrapper>
						))
				) : (
					<StyledIcon icon={faSpinner} pulse />
				)}
			</SocialPicks>
		</StyledMain>
	);
};
