import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import {StyledIcon} from "../../StyledComponents";
import {CollectionRandAndName, DetailsAndImg} from "./";

const StyledDiv = styled.div`
	flex: 1;
	margin: auto;
	background-color: #000;
`;

const StyledDivForWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const DetailsWrapper = ({children}) => (
	<StyledDivForWrapper>{children}</StyledDivForWrapper>
);

export const Board = ({currentCollection, rank}) => (
	<StyledDiv>
		{currentCollection ? (
			<DetailsWrapper>
				<CollectionRandAndName rank={rank} name={currentCollection.name} />
				<DetailsAndImg currentCollection={currentCollection} />
			</DetailsWrapper>
		) : (
			<StyledIcon icon={faSpinner} pulse />
		)}
	</StyledDiv>
);
