import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	margin-left: 20px;
	margin-right: 20px;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
`;

export const Navigation = ({children}) => <StyledNav>{children}</StyledNav>;
