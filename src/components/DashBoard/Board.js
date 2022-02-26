import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import {StyledIcon} from "../../StyledComponents";
import {CollectionRandAndName, DetailsAndImg} from ".";

const StyledDiv = styled.div`
	flex: 1;
	margin-right: 5px;
	background-color: #000;
	border: 1px solid rgba(24, 104, 182, 1);
	border-radius: 9px;
	height: 100%;
`;

const StyledDivForWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const DetailsWrapper = ({children}) => (
	<StyledDivForWrapper>{children}</StyledDivForWrapper>
);

const StyledDivForDetailsHeader = styled.div`
	font-size: 24px;
	padding-top: 15px;
	padding-left: 15px;
	color: white;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	background-color: rgba(24, 104, 182, 1);
`;

export const Board = ({currentCollection, rank}) => (
	<StyledDiv>
		{currentCollection ? (
			<DetailsWrapper>
				<StyledDivForDetailsHeader>Collection</StyledDivForDetailsHeader>
				<CollectionRandAndName rank={rank} name={currentCollection.name} />
				<DetailsAndImg currentCollection={currentCollection} />
			</DetailsWrapper>
		) : (
			<StyledIcon icon={faSpinner} pulse />
		)}
	</StyledDiv>
);
