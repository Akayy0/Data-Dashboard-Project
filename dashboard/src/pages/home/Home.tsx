import React, { useState, useEffect } from "react";
import { Autocomplete, Box, Container, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search, Menu } from "@mui/icons-material";
// @ts-ignore
import { Treemap } from "d3plus-react";

import { Cards } from "../../components";
import { LogoDataMinasWhite } from "../../assets";
import { IAutocomplete, IStates } from "./Home.interface";

import { LogoImage, Subtitle, Wrapper, BoxImage, SearchContainer, AutoCompleteTextField } from "./Home.style";

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
		{ title: "Ouro Preto", image: "https://direcional.com.br/wp-content/uploads/2021/08/minas-gerais.jpg" },
		{ title: "Felício dos Santos", image: "https://arquidiamantina.org.br/home/wp-content/uploads/2019/08/Matriz-Sagrado-Coracao-Felicio-dos-Santos-e1658842317362.jpg" },
		{ title: "Diamantina", image: "https://viagenseoutrashistorias.com.br/wp-content/uploads/2022/09/dicas-diamantina-MG-942x529.jpg" },
		{ title: "Jaboticatubas", image: "https://1.bp.blogspot.com/-XlFAlTUbB8U/YENibK4b7xI/AAAAAAAA4tI/So_C1QgTjeMXYV3RckuvSFFzW6Q9l-pGgCLcBGAsYHQ/s1080/jabotictu.jpg" },
		{ title: "Esmeraldas", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Igreja_de_Santa_Quit%C3%A9ria_-_Esmeraldas_-_MG_-_panoramio.jpg" },
		{ title: "Araxá", image: "https://www.araxa.mg.gov.br/storage/site_conteudo/6/imagem/thumbnails/18_464x277.jpg" },
	];

	const [cities, setCities] = useState<Array<IAutocomplete>>([]);
	const [selectedCity, setSelectedCity] = useState<IAutocomplete>();
	const [error, setError] = useState<boolean>(false);
	const [openLabel, setOpenLabel] = useState<boolean>(false);

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
			{error ? (
				<Subtitle variant="h4" color="red">Ocorreu um erro ao buscar os dados</Subtitle>
			) : (
				<React.Fragment>
					<BoxImage>
						<SearchContainer maxWidth="lg">
							<Grid container spacing={2} alignItems="center" display="flex">
								<Grid item xs={12} sm={6}>
									<LogoImage src={LogoDataMinasWhite} alt="DataMinas logo" />
									<Typography variant="h5" color={theme.palette.primary.main}>O seu portal de dados públicos de Minas Gerais</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Box display="flex" alignItems="center" justifyContent="center">
										<Autocomplete
											id="cities"
											size="small"
											open={openLabel}
											sx={{
												backgroundColor: theme.palette.background.default,
												borderTopLeftRadius: 8,
												borderBottomLeftRadius: 8
											}}
											fullWidth
											forcePopupIcon={false}
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
											renderInput={(params) =>
												<Paper
													component="form"
													sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", backgroundColor: theme.palette.background.default }}
												>
													<IconButton sx={{ p: '10px' }} aria-label="menu" onClick={() => setOpenLabel(!openLabel)}>
														<Menu />
													</IconButton>
													<AutoCompleteTextField
														{...params}
														sx={{
															"& .MuiOutlinedInput-root": {
																"& > fieldset": {
																	border: "none"
																}
															}, flex: 1
														}}
														placeholder="Escolha um município"
													/>
													<IconButton type="button" sx={{ p: '10px', color: theme.palette.primary.contrastText }} aria-label="search">
														<Search />
													</IconButton>
												</Paper>
											}
										/>
									</Box>

									<Box mt={2}>
										<Treemap config={methods} />
									</Box>

								</Grid>
							</Grid>
						</SearchContainer>
					</BoxImage>

					<Container maxWidth="lg">
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
					</Container>
				</React.Fragment>
			)}
		</Wrapper>
	);
}

export default Home;
