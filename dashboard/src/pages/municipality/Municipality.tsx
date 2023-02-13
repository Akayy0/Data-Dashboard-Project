import { useEffect, useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams } from "react-router-dom";
import { Container, Grid } from '@mui/material';

import { InfoCard } from './components';
import { CityTitle, ContetentContainer, InfoText, LoadingContainer, LoadingElement, LoadingText, StateCard, StateText, Wrapper } from './Municipality.style';

function Municipality() {
    const params = useParams();

    const [loading, setLoading] = useState<boolean>(true);
    const [infoArray, setInfoArray] = useState<any[]>([]);
    const [backgroundImage, setBackgroundImage] = useState<string>("");

    const [students, setStudents] = useState<string>("");
    const [schools, setSchools] = useState<string>("");
    const [healthProfessionals, setHealthProfessionals] = useState<string>("");
    
    const databases = ['secex', 'sc', 'hedu', 'cnes_professional', 'cnes_bed']

    useEffect(() => {
        if (!params) return;

        fetchData();

    }, [params])

    function fetchData() {
        let requests = databases.map(data => fetch(`http://api.dataviva.info/${data}/municipality/?municipality=${params.cityId}`));

        Promise.all([...requests, fetch("https://api.pexels.com/v1/search?query=nature?locale=pt-br?orientation=landscape&color=13223A&per_page=30")])
            .then(resp => Promise.all(resp.map(r => r.json())))
            .then(result => {
                setBackgroundImage(result.at(-1).photos[Math.floor(Math.random() * (29) + 1)].src.original);
                result.splice(result.length - 1, 1)
                setInfoArray(result);
                setStudents(result[1]?.data[0][2] ?? "");
                setSchools(result[1]?.data[0][5] ?? "");
                setHealthProfessionals(result[3]?.data[0][1]?? "");
                console.log(databases, result);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    // function renderCards() {
    //     let cardsArray: any[] = [];

    //     infoArray.forEach((info: any) => {
    //         info.headers.forEach((header: string, index: number) => {
    //             if(index !== 0) {
    //                 cardsArray.push(
    //                     <Grid item xs={12} sm={4}>
    //                         <InfoCard cardTitle={header} cardText={info?.data[0][index]}/>
    //                     </Grid>
    //                 )
    //             }
    //         })
    //     });

    //     return cardsArray;
    // }

    return (
        <Wrapper>
            {
                loading ?
                    (
                        <LoadingContainer>
                            <LoadingElement size={80} />
                            <LoadingText>Carregando...</LoadingText>
                        </LoadingContainer>
                    ) :
                    (
                        <ContetentContainer sx={{ backgroundImage: `url('${backgroundImage}')` }}>
                            <CityTitle>{params.cityName}</CityTitle>
                            <StateCard>
                                <PlaceIcon sx={{color: "black", marginRight: 0.8}}/>
                                <StateText>Minas Gerais</StateText>
                            </StateCard>

                            <InfoText variant="overline" >Dados coletados no período de 2010 - 2017</InfoText>

                            <Container maxWidth="lg">
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={4}>
                                        <InfoCard cardTitle='Estudantes' cardText={students}/>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InfoCard cardTitle='Escolas' cardText={schools}/>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InfoCard cardTitle='Profissionais da saúde' cardText={healthProfessionals}/>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <InfoCard cardTitle='Estudantes' cardText={students}/>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InfoCard cardTitle='Escolas' cardText={schools}/>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InfoCard cardTitle='Profissionais da saúde' cardText={healthProfessionals}/>
                                    </Grid>
                                </Grid>
                            </Container>
                            
                        </ContetentContainer>
                    )
            }
        </Wrapper>
    )
}

export default Municipality;