import React, { useState, useEffect } from "react";
import { CircularProgress, Container, ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material";

import { IApiResponse } from "./Home.interface";

import { LoadingBox, Subtitle, TextStyled, Wrapper } from "./Home.style";

function Home() {
	const [data, setData] = useState<Array<string>>([]);
	const [dataLoading, setDataLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		setDataLoading(true);

		fetch("https://dog.ceo/api/breeds/image/random/3")
			.then((response) => response.json())
			.then((res: IApiResponse) => {
				if (res.status === "success") {
					setData(res.message);
				} else {
					setData([]);
				}
			}).catch((error) => {
				setError(true);
				console.log(error);
			}).finally(() => {
				setDataLoading(false);
			})
	}, []);

	function renderImages() {
		return data.map((image, index) =>
			<ImageListItem key={index}>
				<img
					src={`${image}?w=164&h=164&fit=crop&auto=format`}
					srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
					alt={`Imagem de cachorro número ${index}`}
					loading="eager"
				/>
			</ImageListItem>
		)
	}

	return (
		<Wrapper>
			<TextStyled>
				Dashboard
			</TextStyled>

			<Container maxWidth="lg">
				{error ? (
					<Subtitle variant="h4" color="red">Ocorreu um erro ao buscar as imagens na DOG API</Subtitle>
				) : (
					<React.Fragment>
						<Subtitle variant="h4">Imagens encontradas na DOG API</Subtitle>

						{dataLoading ? (
							<LoadingBox>
								<CircularProgress size={80}/>
							</LoadingBox>
						) : (
							<ImageList 
								sx={{ width: "100%", height: matches ? 900 : 450 }} 
								cols={matches ? 1 : 3} 
							>
								{renderImages()}
							</ImageList>
						)}
						
					</React.Fragment>
				)}

			</Container>
		</Wrapper>
	);
}

export default Home;
