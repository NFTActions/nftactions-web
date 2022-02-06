import styled from "styled-components";

const StyledDiv = styled.div`
	display: block;
	text-decoration: none;
	&:hover {
		cursor: pointer;
	}
`;

export const SocialPicks = ({children}) => {
	return <StyledDiv>{children}</StyledDiv>;
};
