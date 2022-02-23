import {Bar} from "react-chartjs-2";
import styled from "styled-components";

const StyledBar = styled(Bar)`
	height: 100%;
`;

export const BarChart = ({chartData, updateSelectedCollection}) => {
	const onClick = (elements) => {
		if (elements.length) {
			const element = elements[0];
			const {_index} = element;
			if (Number.isInteger(_index)) updateSelectedCollection(_index);
		}
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
			}}
			onElementsClick={onClick}
		/>
	);
};
