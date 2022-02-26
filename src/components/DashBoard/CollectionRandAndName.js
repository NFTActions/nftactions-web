import styled from "styled-components";

import {bentoBoxRed} from "../../StyledComponents/Constants";

const StyledDiv = styled.div`
	display: flex;
	padding: 3px;
	justify-content: space-between;
`;

const StyledWrapperForRankAndName = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 6px;
	padding: 3px;
	border: 2px solid ${bentoBoxRed};
	border-radius: 9px;
`;

const StyledDivForRank = styled.div`
	width: 5rem;
	margin: 5px;
	font-size: 20px;
	font-family: "Poppins-Medium";
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff;
`;

const CollectionRank = ({rank}) => (
	<StyledDivForRank>Rank {rank}</StyledDivForRank>
);

const CollectionLogo = styled.div`
	background-color: ${bentoBoxRed};
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin: 15px;
	text-align: center;
`;

const StyledDivForName = styled.div`
	flex: 4;
	margin: 5px;
	font-size: 20px;
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
`;

const CollectionName = ({name}) => <StyledDivForName>{name}</StyledDivForName>;

export const CollectionRandAndName = ({rank, name}) => (
	<StyledDiv>
		<StyledWrapperForRankAndName>
			<CollectionRank rank={rank} />
			<CollectionName name={name} />
		</StyledWrapperForRankAndName>
		<CollectionLogo>logo</CollectionLogo>
	</StyledDiv>
);
