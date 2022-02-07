import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: red;
	margin: 3px;
	&:hover {
		cursor: pointer;
	}
`;

export const StyledIcon = ({icon}) => <StyledFontAwesomeIcon icon={icon} />;
