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

const CollectionLogo = styled.div`
	background-color: rgba(24, 104, 182, 1);
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-top: 5px;
	margin-right: 5px;
	text-align: center;
	font-size: 15px;
`;

const StyledSecondaryNav = styled.div`
	display: flex;
`;

const StyledLink = styled.a`
	display: flex;
	text-decoration: none;
	color: #fff;
	font-size: 18px;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff;
	margin-left: 20px;
	&:hover {
		cursor: pointer;
	}
`;

export const Header = () => (
	<StyledHeader>
		<Navigation>
			<NameAndLogo>
				<CollectionLogo>logo</CollectionLogo>
				Bento
			</NameAndLogo>
			<StyledSecondaryNav>
				<StyledLink>Dashboard</StyledLink>
				<StyledLink>About</StyledLink>
			</StyledSecondaryNav>
			<SocialMediaIcons>
				<StyledIcon icon={faTwitter} iconcolor={"#0088cc"} />
				<StyledIcon icon={faTelegram} iconcolor={"#1d9bf0"} />
			</SocialMediaIcons>
		</Navigation>
	</StyledHeader>
);
