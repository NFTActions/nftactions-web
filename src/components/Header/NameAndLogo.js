import styled from "styled-components";

const StyledLink = styled.a`
	display: flex;
	text-decoration: none;
	color: #fff;
	font-size: 48px;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
		0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
	&:hover {
		cursor: pointer;
	}
`;

export const NameAndLogo = ({children}) => <StyledLink>{children}</StyledLink>;
