import React from "react";
import styled from "styled-components";

import {Header} from "./components/Header";
import {Main} from "./components/Main";

const StyledDiv = styled.div`
	height: 100vh;
`;

const App = () => (
	<StyledDiv>
		<Header />
		<Main />
	</StyledDiv>
);

export default App;
