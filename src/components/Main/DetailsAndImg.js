import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	padding: 3px;
`;

const StyledDivForSoldCount = styled.div`
	flex: 1;
	margin-right: 5px;
`;

const StyledDivForCollectionImg = styled.img`
	flex: 1;
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
