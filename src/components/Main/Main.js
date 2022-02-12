import styled from "styled-components";

import {SocialPicks, TradingPicks} from "./";

const StyledMain = styled.main`
	background-color: #000;
	height: 100%;
`;

export const Main = () => (
	<StyledMain>
		<TradingPicks />
		<SocialPicks></SocialPicks>
	</StyledMain>
);
