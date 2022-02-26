import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {TwitterTweetEmbed} from "react-twitter-embed";
import styled from "styled-components";

import {getData, getTweets} from "../../Scripts/Axios/axiosRequests";
import {baseUrl} from "../../Scripts/Constants";
import {StyledIcon} from "../../StyledComponents";
import {SocialPicks, TradingPicks} from ".";

const StyledMain = styled.main`
	height: 100%;
`;

const StyleTweetWrapper = styled.div`
	padding: 5px;
	overflow: auto;
`;

export const DashBoard = () => {
	const [data, setData] = useState({data: []});
	const [whitelistMintTweets, setWhitelistMintTweets] = useState([]);
	const [collections, setCollections] = useState([]);
	const saleCountCutoff = 1;
	const numberOfCollectionsToShow = 10;

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
				const data = responses.filter(
					(response) => response?.data && Array.isArray(response?.data)
				);
				let tweetsSet = new Set();
				while (tweetsSet.size < 5) {
					let tweetIndex = 0;
					while (tweetIndex < data[0].data.length) {
						for (
							let tweetArrayIndex = 0;
							tweetArrayIndex < data.length;
							tweetArrayIndex++
						) {
							tweetsSet.add(data[tweetArrayIndex].data[tweetIndex]);
							if (tweetsSet.size >= 5) break;
						}
						tweetIndex++;
						if (tweetsSet.size >= 5) break;
					}
				}
				setData([...tweetsSet]);
			});

			const whitelistMintTweetsResponse = await getTweets(
				`/2/tweets/search/recent?query="whitelist mint"&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source`
			);
			setWhitelistMintTweets([...whitelistMintTweetsResponse.data.slice(0, 5)]);
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
			<SocialPicks marginTop="30px">
				{data?.length ? (
					data
						.filter((tweet, index) => index <= 4)
						.map((tweet) => (
							<StyleTweetWrapper key={tweet.id}>
								<TwitterTweetEmbed
									tweetId={tweet.id}
									options={{
										conversation: "none",
										width: 250,
										cards: "hidden",
										theme: "dark",
									}}
									placeholder={<StyledIcon icon={faSpinner} pulse />}
								/>
							</StyleTweetWrapper>
						))
				) : (
					<StyledIcon icon={faSpinner} pulse />
				)}
			</SocialPicks>
			<SocialPicks marginTop="0">
				{whitelistMintTweets?.length ? (
					whitelistMintTweets.map((tweet) => (
						<StyleTweetWrapper key={tweet.id}>
							<TwitterTweetEmbed
								tweetId={tweet.id}
								options={{
									conversation: "none",
									width: 250,
									cards: "hidden",
									theme: "dark",
								}}
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
