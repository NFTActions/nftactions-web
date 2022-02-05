import Header from "./components/Header";
import BarChart from "./components/BarChart";

import React, {useState, useEffect} from "react";
import {baseUrl} from "./Scripts/Constants";
import {getData} from "./Scripts/Axios/axiosRequests";

const App = () => {
	const [chartData, setChartData] = useState(null);
	const saleCountCutoff = 1;
	const numberOfCollectionsToShow = 20;

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
		<div className="container">
			<Header title="NFTActions" />
			<div>{chartData ? <BarChart chartData={chartData} /> : null}</div>
		</div>
	);
};

export default App;
