import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

import {StyledIcon} from "../../StyledComponents";
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
		) : (
			<StyledIcon icon={faSpinner} pulse />
		)}
	</StyledDiv>
);
