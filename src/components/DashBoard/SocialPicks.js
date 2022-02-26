import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	background-color: #000;
	overflow: auto;
`;

export const SocialPicks = ({children}) => <StyledDiv>{children}</StyledDiv>;
