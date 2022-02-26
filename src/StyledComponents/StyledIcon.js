import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import {bentoBoxRed} from "./Constants";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.iconcolor || bentoBoxRed};
	margin: 3px;
	padding: 15px;
	&:hover {
		cursor: pointer;
	}
`;

export const StyledIcon = ({icon, iconcolor, pulse}) => (
	<StyledFontAwesomeIcon
		icon={icon}
		size="2x"
		iconcolor={iconcolor}
		pulse={pulse}
	/>
);
