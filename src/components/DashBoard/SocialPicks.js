import styled from "styled-components";

import {boardBackgroundColor} from "../../StyledComponents/Constants";

const StyledDiv = styled.div`
	display: flex;
	background-color: ${boardBackgroundColor};
	overflow: auto;
	margin-top: ${(props) => props.marginTop};
`;

export const SocialPicks = ({children, marginTop}) => (
	<StyledDiv marginTop={marginTop}>{children}</StyledDiv>
);
