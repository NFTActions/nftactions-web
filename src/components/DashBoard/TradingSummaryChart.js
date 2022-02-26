import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

import {StyledIcon} from "../../StyledComponents";
import {BarChart} from ".";

const StyledDiv = styled.div`
	flex: 2;
	margin-right: 10px;
	margin-left: 5px;
	border: 1px solid rgba(24, 104, 182, 1);
	border-radius: 9px;
	height: 100%;
`;

const StyledDivForChartHeader = styled.div`
	font-size: 24px;
	padding-top: 15px;
	padding-left: 15px;
	color: white;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	background-color: rgba(24, 104, 182, 1);
`;

export const TradingSummaryChart = (props) => (
	<StyledDiv>
		<StyledDivForChartHeader>Trading Picks</StyledDivForChartHeader>
		{props.chartData ? (
			<BarChart {...props} />
		) : (
			<StyledIcon icon={faSpinner} pulse />
		)}
	</StyledDiv>
);
