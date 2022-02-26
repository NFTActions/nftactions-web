import styled from "styled-components";

const StyledLink = styled.a`
	display: flex;
	text-decoration: none;
	color: #fff;
	font-size: 48px;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff;
	&:hover {
		cursor: pointer;
	}
`;

export const NameAndLogo = ({children}) => <StyledLink>{children}</StyledLink>;
