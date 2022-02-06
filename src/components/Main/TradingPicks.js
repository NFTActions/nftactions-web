import styled from "styled-components";
import {baseUrl} from "../../Scripts/Constants";
import {getData} from "../../Scripts/Axios/axiosRequests";
import React, {useState, useEffect} from "react";
import {Board, TradingSummaryChart} from ".";

const StyledDiv = styled.div`
	display: flex;
`;

export const TradingPicks = ({children}) => {
	const [chartData, setChartData] = useState(null);
	const [currentCollection, setCurrentCollection] = useState(null);
	const saleCountCutoff = 1;
	const numberOfCollectionsToShow = 10;

	useEffect(() => {
		async function fetchData() {
			const response = await getData(`${baseUrl}v1/activity/summary`);
			console.log(response);
			const filteredCollections = response.collections
				.filter(
					(responseCollection) => responseCollection.count > saleCountCutoff
				)
				.slice(0, numberOfCollectionsToShow);
			getChartData(filteredCollections);
			setCurrentCollection(filteredCollections[0]);
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
					borderWidth: 2,
				},
			],
		});
	};
	return (
		<StyledDiv>
			<TradingSummaryChart chartData={chartData} />
			<Board currentCollection={currentCollection} />
		</StyledDiv>
	);
};
