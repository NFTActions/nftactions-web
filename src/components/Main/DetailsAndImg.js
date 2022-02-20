import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	padding: 3px;
	justify-content: center;
	flex-direction: column;
`;

const StyledDivForSoldCount = styled.div`
	flex: 1;
	margin-right: 5px;
	text-align: center;
	color: #fff;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
		0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
`;

const StyledDivForCollectionImg = styled.img`
	width: 180px;
	height: auto;
`;

const StyledDivForDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledDivForImg = styled.div`
	text-align: center;
`;

const SoldCount = ({count}) => (
	<StyledDivForSoldCount>{`# Sales: ${count} sold`}</StyledDivForSoldCount>
);
const CollectionImg = ({img, alt}) => (
	<StyledDivForImg>
		<StyledDivForCollectionImg src={img} alt={alt} />
	</StyledDivForImg>
);

const Details = ({children}) => (
	<StyledDivForDetails>{children}</StyledDivForDetails>
);

const TotalSales = () => (
	<StyledDivForSoldCount>{`# Total Sales: ... sold`}</StyledDivForSoldCount>
);

const NumberOfOwners = () => (
	<StyledDivForSoldCount>{`# Owners: ... `}</StyledDivForSoldCount>
);

export const DetailsAndImg = ({currentCollection}) => (
	<StyledDiv>
		<CollectionImg
			img={currentCollection.image_url}
			alt={currentCollection.name}
		/>
		<Details>
			<SoldCount count={currentCollection.count} />
			<TotalSales />
			<NumberOfOwners />
		</Details>
	</StyledDiv>
);
