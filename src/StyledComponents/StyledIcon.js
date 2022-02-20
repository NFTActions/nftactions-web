import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.iconcolor || "palevioletred"};
	margin: 3px;
	padding-left: 15px;
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
