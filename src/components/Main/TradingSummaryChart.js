import React from "react";
import styled from "styled-components";

import {BarChart} from "./";

const StyledDiv = styled.div`
	flex: 2;
	margin: 10px;
`;

export const TradingSummaryChart = ({chartData, updateSelectedCollection}) => (
	<StyledDiv>
		{chartData ? (
			<BarChart
				chartData={chartData}
				updateSelectedCollection={updateSelectedCollection}
			/>
		) : null}
	</StyledDiv>
);
