import React, { useState, useEffect } from "react";
import { Autocomplete, Box, Container, Grid, IconButton, TextField, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
// @ts-ignore
import { Treemap } from "d3plus-react";

import { IAutocomplete, IStates } from "./Home.interface";

import { Subtitle, Title, Wrapper } from "./Home.style";
import { Cards } from "../../components";

function Home() {
	const theme = useTheme();
	const navigate = useNavigate();

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

	const cardsInfo = [
		{title: "Ouro Preto", image: "https://direcional.com.br/wp-content/uploads/2021/08/minas-gerais.jpg"},
		{title: "Felício dos Santos", image: "https://arquidiamantina.org.br/home/wp-content/uploads/2019/08/Matriz-Sagrado-Coracao-Felicio-dos-Santos-e1658842317362.jpg"},
		{title: "Diamantina", image: "https://viagenseoutrashistorias.com.br/wp-content/uploads/2022/09/dicas-diamantina-MG-942x529.jpg"},
		{title: "Jaboticatubas", image: "https://1.bp.blogspot.com/-XlFAlTUbB8U/YENibK4b7xI/AAAAAAAA4tI/So_C1QgTjeMXYV3RckuvSFFzW6Q9l-pGgCLcBGAsYHQ/s1080/jabotictu.jpg"},
		{title: "Esmeraldas", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Igreja_de_Santa_Quit%C3%A9ria_-_Esmeraldas_-_MG_-_panoramio.jpg"},
		{title: "Araxá", image: "https://www.araxa.mg.gov.br/storage/site_conteudo/6/imagem/thumbnails/18_464x277.jpg"},
	];

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
										sx={{ marginRight: 2, backgroundColor: theme.palette.background.default }}
										fullWidth
										disablePortal
										options={cities}
										onChange={(event, newValue) => {
											if (newValue) setSelectedCity(newValue)
										}}
										renderOption={(props, option) => {
											const { name } = option;
											return (
												<span {...props} style={{ backgroundColor: theme.palette.background.default }}>
													{name}
												</span>
											);
										}}
										getOptionLabel={(option) => option.name}
										renderInput={(params) => <TextField {...params} label="Escolha um município" />}
									/>

									<IconButton onClick={handleCity}>
										<Search />
									</IconButton>
								</Box>

								<Box mt={2}>
									<Treemap config={methods} />
								</Box>

							</Grid>
						</Grid>

						<Typography variant="h3" textAlign="center" mt={1} mb={1}>Pontos Turísticos</Typography>
						<Grid container spacing={2} mb={2}>
							{cardsInfo.map((card, index) => 
								<Grid item xs={12} sm={4} key={index}>
									<Cards
										title={card.title}
										image={card.image}
									/>
								</Grid>
							)}
						</Grid>
					</React.Fragment>
				)}

			</Container>
		</Wrapper>
	);
}

export default Home;
