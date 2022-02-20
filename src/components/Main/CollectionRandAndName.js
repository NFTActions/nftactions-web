import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	padding: 3px;
`;

const StyledDivForRank = styled.div`
	width: 5rem;
	margin: 5px;
	font-size: 25px;
	font-family: "Poppins-Medium";
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
		0 0 82px #0fa;
`;

const CollectionRank = ({rank}) => (
	<StyledDivForRank>Rank {rank}</StyledDivForRank>
);

const CollectionLogo = styled.div`
	background-color: rgba(24, 104, 182, 1);
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-top: 5px;
	margin-right: 5px;
	text-align: center;
`;

const StyledDivForName = styled.div`
	flex: 4;
	margin: 5px;
	font-size: 25px;
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
`;

const CollectionName = ({name}) => <StyledDivForName>{name}</StyledDivForName>;

export const CollectionRandAndName = ({rank, name}) => (
	<StyledDiv>
		<CollectionRank rank={rank} />
		<CollectionName name={name} />
		<CollectionLogo>logo</CollectionLogo>
	</StyledDiv>
);
