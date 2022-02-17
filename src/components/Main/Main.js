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

const myData = {
	data: [
		{
			author_id: "12603722",
			referenced_tweets: [
				{
					type: "replied_to",
					id: "1492935052598157315",
				},
			],
			source: "Twitter Web App",
			in_reply_to_user_id: "69558405",
			possibly_sensitive: false,
			id: "1492936878844260360",
			text: "@JoeStephenson96 @iggigg @ASAC_NFT What if bigfoot was an NFT all along, and that's why he's so blurry",
			lang: "en",
			entities: {
				mentions: [
					{
						start: 0,
						end: 16,
						username: "JoeStephenson96",
						id: "69558405",
					},
					{
						start: 17,
						end: 24,
						username: "iggigg",
						id: "18510863",
					},
					{
						start: 25,
						end: 34,
						username: "ASAC_NFT",
						id: "1479607965208436746",
					},
				],
			},
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "825028913805959168",
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1492866228880388097",
				},
			],
			source: "Twitter for iPhone",
			possibly_sensitive: false,
			entities: {
				cashtags: [
					{
						start: 23,
						end: 27,
						tag: "ETH",
					},
				],
				hashtags: [
					{
						start: 127,
						end: 131,
						tag: "NFT",
					},
					{
						start: 132,
						end: 137,
						tag: "NFTs",
					},
				],
				mentions: [
					{
						start: 3,
						end: 15,
						username: "CryptoBoltx",
						id: "1403411186079735812",
					},
				],
			},
			id: "1492936878789517312",
			text: "RT @CryptoBoltx: NFT / $ETH GIVEAWAY 🎁 \n\n($1000 TOTAL OVER 24 HOURS TO ACTIVES 🔔) \n\n- RT \n- FOLLOW ME + 🔔 \n- TAG YOUR FRIENDS\n\n#NFT #NFTs #…",
			lang: "en",
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1480224393972228098",
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1492870280267583490",
				},
			],
			source: "Twitter for Android",
			possibly_sensitive: false,
			id: "1492936878504353793",
			text: "RT @AncientDragoNFT: Ancient Dragons is close to reaching 10k members!\nWe want to thank you for such an amazing community of dragons🐉\n\nMint…",
			lang: "en",
			entities: {
				mentions: [
					{
						start: 3,
						end: 19,
						username: "AncientDragoNFT",
						id: "1488574582290272257",
					},
				],
			},
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1488918451020308481",
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1492914144756256769",
				},
			],
			source: "Twitter Web App",
			possibly_sensitive: false,
			id: "1492936878445707272",
			entities: {
				hashtags: [
					{
						start: 25,
						end: 29,
						tag: "NFT",
					},
				],
				mentions: [
					{
						start: 3,
						end: 13,
						username: "markx_nft",
						id: "1480425890102145025",
					},
				],
			},
			text: "RT @markx_nft: FREE BAYC #NFT GIVEAWAY FROM MY COLLECTION! \nThis is crazy! Thank you so much guys, I'm going to send this Bored Ape NFT to…",
			lang: "en",
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1437865586801905664",
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1492922022376181760",
				},
			],
			source: "Twitter for Android",
			possibly_sensitive: false,
			id: "1492936878433226756",
			text: "RT @TsukiNFT: @TsukiNFT x @thebunnybuddies \n\nWe're giving away 10 WHITELIST spots from the Bunny Buddies!\n\nTo enter: \n1️⃣ Like and Retweet…",
			lang: "en",
			entities: {
				mentions: [
					{
						start: 3,
						end: 12,
						username: "TsukiNFT",
						id: "1483056032330960904",
					},
					{
						start: 14,
						end: 23,
						username: "TsukiNFT",
						id: "1483056032330960904",
					},
					{
						start: 26,
						end: 42,
						username: "thebunnybuddies",
						id: "1486748711883583490",
					},
				],
			},
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1191898243237580800",
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1492687343995826181",
				},
			],
			source: "Twitter for Android",
			possibly_sensitive: false,
			id: "1492936878407958538",
			text: "RT @encelad_nft: Who wants a meta-penthouse? 15 ETH value.\n\nGiving away 20 WL spots for Encelad units.\n\n1. Follow @encelad_nft\n2. Like &amp; re…",
			lang: "en",
			entities: {
				mentions: [
					{
						start: 3,
						end: 15,
						username: "encelad_nft",
						id: "1465882298155417602",
					},
					{
						start: 114,
						end: 126,
						username: "encelad_nft",
						id: "1465882298155417602",
					},
				],
			},
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1439418788512890888",
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1492824173189681153",
				},
			],
			source: "Twitter Web App",
			possibly_sensitive: false,
			id: "1492936878391234561",
			text: "RT @MonoLocco_: 🐒 MonoLocco X SのKIRA 💮\n\nWe are excited to announce our offical collaboration with @Sekira_NFT  🎉\n\nTo celebrate, we are givi…",
			lang: "en",
			entities: {
				mentions: [
					{
						start: 3,
						end: 14,
						username: "MonoLocco_",
						id: "1479510158732627974",
					},
					{
						start: 98,
						end: 109,
						username: "Sekira_NFT",
						id: "1468039701642629122",
					},
				],
			},
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1429121810508001280",
			entities: {
				urls: [
					{
						start: 131,
						end: 154,
						url: "https://t.co/sGXjtJ1TgE",
						expanded_url:
							"https://twitter.com/k4myoncunun0glu/status/1490786749135654916?s=20&t=n7OpSTdxm3DnaU2_Mz3Zkg",
						display_url: "twitter.com/k4myoncunun0gl…",
					},
				],
				hashtags: [
					{
						start: 11,
						end: 15,
						tag: "NFT",
					},
					{
						start: 16,
						end: 21,
						tag: "NFTs",
					},
					{
						start: 22,
						end: 35,
						tag: "NFTCommunity",
					},
					{
						start: 36,
						end: 48,
						tag: "NFTGiveaway",
					},
					{
						start: 50,
						end: 58,
						tag: "NFTdrop",
					},
					{
						start: 59,
						end: 73,
						tag: "NFTCollection",
					},
					{
						start: 74,
						end: 81,
						tag: "nftart",
					},
					{
						start: 82,
						end: 95,
						tag: "nftcollector",
					},
					{
						start: 96,
						end: 107,
						tag: "OpenSeaNFT",
					},
					{
						start: 109,
						end: 117,
						tag: "opensea",
					},
				],
				mentions: [
					{
						start: 0,
						end: 10,
						username: "UlloaRemy",
						id: "1460700781842210817",
					},
					{
						start: 119,
						end: 127,
						username: "opensea",
						id: "946213559213555712",
					},
				],
			},
			referenced_tweets: [
				{
					type: "quoted",
					id: "1490786749135654916",
				},
				{
					type: "replied_to",
					id: "1492933162590248968",
				},
			],
			source: "Twitter Web App",
			in_reply_to_user_id: "1460700781842210817",
			possibly_sensitive: false,
			id: "1492936878311579659",
			text: "@UlloaRemy #NFT #NFTs #NFTCommunity #NFTGiveaway  #NFTdrop #NFTCollection #nftart #nftcollector #OpenSeaNFT  #opensea \n@opensea    https://t.co/sGXjtJ1TgE",
			lang: "und",
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1403934972076081153",
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1491747788140523520",
				},
			],
			source: "Twitter for Android",
			possibly_sensitive: false,
			id: "1492936878299004934",
			text: "RT @CryptoNFT_BSC: 🌀 Crypto NFT 🌀\n\nA Digital Marketplace for Crypto Collectibles &amp; NFT's\n\n🌠First 200 uniques NFTs available for Minting\n🤝Up…",
			lang: "en",
			entities: {
				mentions: [
					{
						start: 3,
						end: 17,
						username: "CryptoNFT_BSC",
						id: "1490430594257498117",
					},
				],
			},
			created_at: "2022-02-13T19:01:03.000Z",
		},
		{
			author_id: "1416000655706103812",
			entities: {
				urls: [
					{
						start: 90,
						end: 113,
						url: "https://t.co/uX7mO0gcr4",
						expanded_url: "https://discord.com/invite/glawarriors",
						display_url: "discord.com/invite/glawarr…",
						images: [
							{
								url: "https://pbs.twimg.com/news_img/1491093377890545664/rKxmkrT1?format=jpg&name=orig",
								width: 512,
								height: 273,
							},
							{
								url: "https://pbs.twimg.com/news_img/1491093377890545664/rKxmkrT1?format=jpg&name=150x150",
								width: 150,
								height: 150,
							},
						],
						status: 200,
						title: "Discord - A New Way to Chat with Friends & Communities",
						description:
							"Discord is the easiest way to communicate over voice, video, and text. Chat, hang out, and stay close with your friends and communities.",
						unwound_url: "https://discord.com/invite/glawarriors",
					},
				],
				mentions: [
					{
						start: 3,
						end: 17,
						username: "PhoenixPromos",
						id: "3533285415",
					},
					{
						start: 50,
						end: 65,
						username: "GLaWarriorsNFT",
						id: "1480953982893834243",
					},
				],
			},
			referenced_tweets: [
				{
					type: "retweeted",
					id: "1492822267209949184",
				},
			],
			source: "Twitter for Android",
			possibly_sensitive: false,
			id: "1492936878211104768",
			text: "RT @PhoenixPromos: Giveaway $200 💸 \n\n☑️ rt follow @GLaWarriorsNFT\n\n☑️ join their Discord: https://t.co/uX7mO0gcr4\n\nends in 24 hours ⏳ good…",
			lang: "en",
			created_at: "2022-02-13T19:01:03.000Z",
		},
	],
	meta: {
		newest_id: "1492936878844260360",
		oldest_id: "1492936878211104768",
		result_count: 10,
		next_token: "b26v89c19zqg8o3fpe75qoggnohvadx2ms19v3ytf4ol9",
	},
};

export const Main = () => {
	const [data, setData] = useState({data: []});
	useEffect(() => {
		// async function fetchCollection() {
		// 	const response = await getData(`${baseUrl}v1/activity/summary`);
		// 	const filteredCollections = response.collections
		// 		.filter(
		// 			(responseCollection) => responseCollection.count > saleCountCutoff
		// 		)
		// 		.slice(0, numberOfCollectionsToShow);
		// 	getChartData(filteredCollections);
		// 	setCollections(filteredCollections);
		// 	setCurrentCollectionIndex(0);
		// }
		// fetchCollection();

		const fetchData = () => {
			fetch("/.netlify/functions/handler", {
				headers: {
					accept: "Accept: application/json",
				},
			})
				.then((x) => x.json())
				.then((data) => {
					console.log(data);
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
