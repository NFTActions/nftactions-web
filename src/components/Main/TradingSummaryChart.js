import React from "react";
import styled from "styled-components";

import BarChart from "../../components/BarChart";

const StyledDiv = styled.div`
	flex: 2;
`;

export const TradingSummaryChart = ({chartData}) => {
	return (
		<StyledDiv>
			{chartData ? <BarChart chartData={chartData} /> : null}
		</StyledDiv>
	);
};
