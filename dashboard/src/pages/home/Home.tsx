import React, { useState, useEffect } from "react";
import { Autocomplete, Box, Container, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
// @ts-ignore
import { Treemap } from "d3plus-react";

import { IAutocomplete, IStates } from "./Home.interface";

import { Subtitle, TextStyled, Title, Wrapper } from "./Home.style";

function Home() {

	const methods = {
		groupBy: "id",
		data: [
			{ id: "alpha", value: 29 },
			{ id: "bet?", value: 10 },
			{ id: "be/", value: 10 },
			{ id: "bea", value: 10 },

		],

		size: (d: { value: any; }) => d.value
	};
	
	const navigate = useNavigate();

	const [cities, setCities] = useState<Array<IAutocomplete>>([]);
	const [selectedCity, setSelectedCity] = useState<IAutocomplete>();
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/distritos")
			.then((res) => {
				if (res.status === 200 && res.ok) {
					return res.json();
				} else {
					return false
				}
			}).then((res: IStates[]) => {
				let cityArr: IAutocomplete[] = [];

				res.forEach((city: IStates) => {
					cityArr.push({ label: city.id, name: city.nome + " - " + city.municipio?.nome });
				});

				setCities(cityArr);

			}).catch((error) => {
				setError(true);
				console.log(error);
			})
	}, []);

	function handleCity() {
		if (selectedCity) {
			navigate(`/city/${selectedCity.label}`);
		} else {
			alert("Selecione um município para pesquisar.");
		}
	}

	return (
		<Wrapper>
			<Container maxWidth="lg">
				{error ? (
					<Subtitle variant="h4" color="red">Ocorreu um erro ao buscar os dados</Subtitle>
				) : (
					<React.Fragment>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<Title variant="h2">Data Minas</Title>
								<Typography variant="body1">O seu portal de dados públicos de Minas Gerais</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Box display="flex" alignItems="center" justifyContent="center">
									<Autocomplete
										id="cities"
										sx={{ marginRight: 2 }}
										fullWidth
										disablePortal
										options={cities}
										onChange={(event, newValue) => {
											if (newValue) setSelectedCity(newValue)
										}}
										getOptionLabel={(option) => option.name}
										renderInput={(params) => <TextField {...params} label="Escolha um município" />}
									/>

									<IconButton onClick={handleCity}>
										<Search />
									</IconButton>
								</Box>

								<Box mt={2}>
									<Treemap config={methods}/>
								</Box>

							</Grid>
						</Grid>
					</React.Fragment>
				)}

			</Container>
		</Wrapper>
	);
}

export default Home;
