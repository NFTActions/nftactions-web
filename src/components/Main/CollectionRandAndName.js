import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	padding: 3px;
`;

const StyledDivForName = styled.div`
	flex: 4;
	margin: auto;
	padding: 5px;
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
`;

const StyledDivForRank = styled.div`
	flex: 1;
	margin: 5px;
	font-size: 25px;
	font-family: "Poppins-Medium";
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
		0 0 82px #0fa;
`;

const CollectionName = ({name}) => <StyledDivForName>{name}</StyledDivForName>;
const CollectionRank = ({rank}) => <StyledDivForRank>{rank}</StyledDivForRank>;

export const CollectionRandAndName = ({name, rank}) => (
	<StyledDiv>
		<CollectionRank rank={rank} />
		<CollectionName name={name} />
	</StyledDiv>
);
