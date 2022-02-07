import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	padding: 3px;
`;

const StyledDivForName = styled.div`
	flex: 4;
	margin: auto;
	padding: 5px;
`;

const StyledDivForRank = styled.div`
	flex: 1;
	margin: 5px;
	font-size: 25px;
	font-family: "Poppins-Medium";
`;

const CollectionName = ({name}) => <StyledDivForName>{name}</StyledDivForName>;
const CollectionRank = ({rank}) => <StyledDivForRank>{rank}</StyledDivForRank>;

export const CollectionRandAndName = ({name, rank}) => (
	<StyledDiv>
		<CollectionRank rank={rank} />
		<CollectionName name={name} />
	</StyledDiv>
);
