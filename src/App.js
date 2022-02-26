import React from "react";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";

import {About, DashBoard, Header} from "./components";

const StyledDiv = styled.div`
	height: 100vh;
`;

const App = () => (
	<StyledDiv>
		<Header />
		<Routes>
			<Route exact path="/" element={<DashBoard />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</StyledDiv>
);

export default App;
