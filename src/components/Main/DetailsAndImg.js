import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	padding: 3px;
	justify-content: space-around;
`;

const StyledDivForSoldCount = styled.div`
	flex: 1;
	margin-right: 5px;
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
		0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
`;

const StyledDivForCollectionImg = styled.img`
	width: 120px;
	height: auto;
`;

const StyledDivForDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

const SoldCount = ({count}) => (
	<StyledDivForSoldCount>{`${count} sold`}</StyledDivForSoldCount>
);
const CollectionImg = ({img, alt}) => (
	<StyledDivForCollectionImg src={img} alt={alt} />
);

const Details = ({children}) => (
	<StyledDivForDetails>{children}</StyledDivForDetails>
);

export const DetailsAndImg = ({currentCollection}) => (
	<StyledDiv>
		<Details>
			<SoldCount count={currentCollection.count} />
		</Details>
		<CollectionImg
			img={currentCollection.image_url}
			alt={currentCollection.name}
		/>
	</StyledDiv>
);
