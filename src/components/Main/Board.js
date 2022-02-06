import styled from "styled-components";

const StyledDiv = styled.div`
	flex: 1;
	background-color: aliceblue;
`;

export const Board = ({currentCollection}) => {
	return <StyledDiv>{currentCollection.name}</StyledDiv>;
};
