import styled from "styled-components";
import {CollectionRandAndName, DetailsAndImg} from "./";

const StyledDiv = styled.div`
	flex: 1;
	background-color: aliceblue;
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
		) : null}
	</StyledDiv>
);
