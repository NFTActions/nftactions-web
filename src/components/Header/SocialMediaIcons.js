import styled from "styled-components";

const StyledDiv = styled.div`
	padding: 5px;
`;

export const SocialMediaIcons = ({children}) => {
	return <StyledDiv>{children}</StyledDiv>;
};
