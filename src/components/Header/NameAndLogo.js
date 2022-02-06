import styled from "styled-components";

const StyledLink = styled.a`
	display: block;
	text-decoration: none;
	&:hover {
		cursor: pointer;
	}
`;

export const NameAndLogo = ({children}) => {
	return <StyledLink>{children}</StyledLink>;
};
