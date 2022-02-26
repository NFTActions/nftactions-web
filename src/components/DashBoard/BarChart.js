import {Bar} from "react-chartjs-2";
import styled from "styled-components";

import {chartLabelCutOff} from "../../Scripts/Constants";
import {bentoBoxRed} from "../../StyledComponents/Constants";

const StyledBar = styled(Bar)`
	height: 100%;
`;

export const BarChart = ({
	chartData,
	updateSelectedCollection,
	collectionNames,
}) => {
	const onClick = (elements) => {
		if (elements.length) {
			const element = elements[0];
			const {_index} = element;
			if (Number.isInteger(_index)) updateSelectedCollection(_index);
		}
	};

	const getToolTips = (tooltipItem) => {
		return collectionNames.find((name) => {
			if (
				name.slice(0, chartLabelCutOff) ===
				tooltipItem[0].xLabel.slice(0, chartLabelCutOff)
			)
				return name;
			return "";
		});
	};
	return (
		<StyledBar
			data={chartData}
			options={{
				title: {
					display: true,
					text: "20 Most Sold Collections of the Past Hour",
					fontSize: 20,
				},
				legend: {
					display: true,
					position: "top",
				},
				tooltips: {
					mode: "label",
					callbacks: {
						title(tooltipItem) {
							return getToolTips(tooltipItem);
						},
					},
				},
				plugins: {
					legend: {
						labels: {
							color: `${bentoBoxRed}`,
						},
					},
				},
			}}
			onElementsClick={onClick}
		/>
	);
};
