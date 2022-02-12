import {faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import {StyledIcon} from "../../StyledComponents";
import {NameAndLogo, Navigation, SocialMediaIcons} from ".";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	position: relative;
	padding: 1rem 0;
	background-color: #000;
`;

export const Header = () => (
	<StyledHeader>
		<Navigation>
			<NameAndLogo>Bento</NameAndLogo>
			<SocialMediaIcons>
				<StyledIcon icon={faTwitter} iconcolor={"#0088cc"} />
				<StyledIcon icon={faTelegram} iconcolor={"#1d9bf0"} />
			</SocialMediaIcons>
		</Navigation>
	</StyledHeader>
);
