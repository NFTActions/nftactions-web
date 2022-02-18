import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {getData} from "../../Scripts/Axios/axiosRequests";
import {baseUrl} from "../../Scripts/Constants";
import {Board, TradingSummaryChart} from "./";

const StyledDiv = styled.div`
	display: flex;
	height: 480px;
`;

export const TradingPicks = () => {
	const [chartData, setChartData] = useState(null);
	const [collections, setCollections] = useState(null);
	const [currentCollectionIndex, setCurrentCollectionIndex] = useState(0);
	const saleCountCutoff = 1;
	const numberOfCollectionsToShow = 20;

	useEffect(() => {
		async function fetchData() {
			const response = await getData(`${baseUrl}v1/activity/summary`);
			const filteredCollections = response.collections
				.filter(
					(responseCollection) => responseCollection.count > saleCountCutoff
				)
				.slice(0, numberOfCollectionsToShow);
			getChartData(filteredCollections);
			setCollections(filteredCollections);
			setCurrentCollectionIndex(0);
		}

		fetchData();
	}, []);

	const getChartData = (filteredCollections) => {
		const names = filteredCollections.map(
			(filteredCollection) => filteredCollection.name
		);
		const saleCounts = filteredCollections.map((filteredCollection) =>
			parseInt(filteredCollection.count)
		);
		setChartData({
			labels: names,
			datasets: [
				{
					label: "Number of sales",
					data: saleCounts,
					backgroundColor: "rgba(24,104,182,1)",
					borderWidth: 1,
				},
			],
		});
	};

	const updateSelectedCollection = (index) => {
		if (index !== currentCollectionIndex) setCurrentCollectionIndex(index);
	};

	return (
		<StyledDiv>
			<TradingSummaryChart
				chartData={chartData}
				updateSelectedCollection={updateSelectedCollection}
			/>
			<Board
				currentCollection={
					collections ? collections[currentCollectionIndex] : null
				}
				rank={currentCollectionIndex + 1}
			/>
		</StyledDiv>
	);
};
