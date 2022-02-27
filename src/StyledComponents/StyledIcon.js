import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import {bentoBoxRed} from "./Constants";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.iconcolor || bentoBoxRed};
	margin: 3px;
	padding: 15px;
	align-self: ${(props) => (props?.alignself ? props?.alignself : "stretch")};
	&:hover {
		cursor: pointer;
	}
`;

export const StyledIcon = (props) => (
	<StyledFontAwesomeIcon size="2x" {...props} />
);
