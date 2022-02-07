import {faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import {NameAndLogo, Navigation, SocialMediaIcons, StyledIcon} from ".";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	position: relative;
	padding: 0.75rem 0;
`;

export const Header = () => (
	<StyledHeader>
		<Navigation>
			<NameAndLogo>Bento</NameAndLogo>
			<SocialMediaIcons>
				<StyledIcon icon={faTwitter} />
				<StyledIcon icon={faTelegram} />
			</SocialMediaIcons>
		</Navigation>
	</StyledHeader>
);
