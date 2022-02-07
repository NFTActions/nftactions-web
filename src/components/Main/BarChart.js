import {Bar} from "react-chartjs-2";

export const BarChart = ({chartData, updateSelectedCollection}) => {
	const onClick = (elements) => {
		if (elements.length) {
			const element = elements[0];
			const {_index} = element;
			if (Number.isInteger(_index)) updateSelectedCollection(_index);
		}
	};
	return (
		<Bar
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
