import { useEffect, useState } from 'react';
import _ from 'lodash';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams } from "react-router-dom";
import { Container, Grid } from '@mui/material';
// @ts-ignore
import { Treemap, BarChart, Pie, LinePlot } from "d3plus-react";

import { InfoCard } from './components';
import { getUrls } from '../../modules';

import { CityTitle, ContetentContainer, GraphContainer, GraphText, InfoText, LoadingContainer, LoadingElement, LoadingText, StateCard, StateText, Wrapper } from './Municipality.style';

function Municipality() {
    const params = useParams();

    const urls = getUrls(params.cityId ?? "");

    const [loading, setLoading] = useState<boolean>(true);
    const [industryDataArray, setIndustryDataArray] = useState<any[]>([]);
    const [ocupationDataArray, setOcupationDataArray] = useState<any[]>([]);
    const [studentsDataArray, setStudentsDataArray] = useState<any[]>([]);

    const [backgroundImage, setBackgroundImage] = useState<string>("");

    const [students, setStudents] = useState<string>("");
    const [schools, setSchools] = useState<string>("");
    const [healthProfessionals, setHealthProfessionals] = useState<string>("");

    useEffect(() => {
        if (!params) return;

        fetchData();

    }, [params])

    function fetchData() {

        Promise.all(urls)
            .then(resp => Promise.all(resp.map(r => r.json())))
            .then(result => {
                setBackgroundImage(result.at(-4).photos[Math.floor(Math.random() * (29) + 1)].src.original);
                result.splice(result.length - 4, 1)

                const industryArray = _.take(result[5].data.sort((a: any, b: any) => b[5] - a[5]), 10);
                const ocupationArray = _.take(result[6].data.sort((a: any, b: any) => b[5] - a[5]), 10);
                const studentsArray = _.take(result[7].data.sort((a: any, b: any) => b[3] - a[3]), 10);

                getIndustryNames(industryArray);
                getOcupationNames(ocupationArray);
                getStudents(studentsArray);

                setStudents(result[1]?.data[0][2] ?? "");
                setSchools(result[1]?.data[0][5] ?? "");
                setHealthProfessionals(result[3]?.data[0][1] ?? "");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function getIndustryNames(dataArray: any[]) {
        let formatedDataArray: any[] = [];

        fetch("http://api.dataviva.info/metadata/industry_division")
        .then((res) => res.json())
        .then((response) => {
            dataArray.forEach((item) => {
                formatedDataArray.push({id: response[item[0]].name_pt, value: item[5]})
            });

            setIndustryDataArray(formatedDataArray);
        })
    }

    function getOcupationNames(dataArray: any[]) {
        let formatedDataArray: any[] = [];

        fetch("http://api.dataviva.info/metadata/occupation_family")
        .then((res) => res.json())
        .then((response) => {
            dataArray.forEach((item) => {
                if(response[item[0]]) formatedDataArray.push({id: response[item[0]].name_pt, value: item[5]})
            });

            setOcupationDataArray(formatedDataArray);
        })
    }

    function getStudents(dataArray: any[]) {
        let formatedDataArray: any[] = [];

        fetch("http://api.dataviva.info/metadata/sc_course")
        .then((res) => res.json())
        .then((response) => {
            dataArray.forEach((item) => {
                if(response[item[0]]) formatedDataArray.push({id: response[item[0]].name_pt, value: item[5]})
            });

            setStudentsDataArray(formatedDataArray);
        })
    }

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
                        <>
                            <ContetentContainer sx={{ backgroundImage: `url('${backgroundImage}')` }}>
                                <CityTitle>{params.cityName}</CityTitle>
                                <StateCard>
                                    <PlaceIcon sx={{ color: "black", marginRight: 0.8 }} />
                                    <StateText>Minas Gerais</StateText>
                                </StateCard>

                                <InfoText variant="overline" >Dados coletados no período de 2010 - 2017</InfoText>

                                <Container maxWidth="lg">
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} sm={4}>
                                            <InfoCard cardTitle='Estudantes' cardText={students} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <InfoCard cardTitle='Escolas' cardText={schools} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <InfoCard cardTitle='Profissionais da saúde' cardText={healthProfessionals} />
                                        </Grid>

                                        <Grid item xs={12} sm={4}>
                                            <InfoCard cardTitle='Estudantes' cardText={students} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <InfoCard cardTitle='Escolas' cardText={schools} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <InfoCard cardTitle='Profissionais da saúde' cardText={healthProfessionals} />
                                        </Grid>
                                    </Grid>
                                </Container>
                            </ContetentContainer>

                            <GraphContainer maxWidth="xl">
                                <GraphText variant="h4">Gráficos</GraphText>

                                <Grid container rowSpacing={4}>
                                    <Grid item xs={12}>
                                        <GraphText variant="h6">Porcentagem de empregos por indústria - 2017</GraphText>
                                        
                                        <Treemap config={{
                                            data: industryDataArray,
                                            groupBy: 'id',
                                            sum: 'value',
                                            legend: false,
                                            height: 400
                                        }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <GraphText variant="h6">Porcentagem de pessoas empregadas por categoria - 2017</GraphText>
                                        
                                        <Treemap config={{
                                            data: ocupationDataArray,
                                            groupBy: 'id',
                                            legend: false,
                                            sum: 'value',
                                            height: 400
                                        }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <GraphText variant="h6">Matrículas por cursos técnicos</GraphText>
                                        
                                        <Treemap config={{
                                            data: studentsDataArray,
                                            groupBy: 'id',
                                            legend: false,
                                            sum: 'value',
                                            height: 400
                                        }} />
                                    </Grid>

                                    {/* <Grid item xs={12} sm={4}>
                                        <BarChart config={{
                                            data: [
                                                {
                                                    id: 'alpha',
                                                    x: 4,
                                                    y: 7
                                                },
                                                {
                                                    id: 'alpha',
                                                    x: 5,
                                                    y: 25
                                                },
                                                {
                                                    id: 'alpha',
                                                    x: 6,
                                                    y: 13
                                                },
                                                {
                                                    id: 'beta',
                                                    x: 4,
                                                    y: 17
                                                },
                                                {
                                                    id: 'beta',
                                                    x: 5,
                                                    y: 8
                                                },
                                                {
                                                    id: 'beta',
                                                    x: 6,
                                                    y: 13
                                                }
                                            ],
                                            groupBy: 'id',
                                            height: 300
                                        }} />
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Pie config={{
                                            data: [
                                                {
                                                    id: 'alpha',
                                                    value: 29
                                                },
                                                {
                                                    id: 'beta',
                                                    value: 10
                                                },
                                                {
                                                    id: 'gamma',
                                                    value: 2
                                                },
                                                {
                                                    id: 'delta',
                                                    value: 29
                                                },
                                                {
                                                    id: 'eta',
                                                    value: 25
                                                }
                                            ],
                                            groupBy: 'id',
                                            sum: 'value',
                                            height: 300
                                        }} />
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <LinePlot config={{
                                            data: [
                                                {
                                                    id: 'alpha',
                                                    x: 4,
                                                    y: 7
                                                },
                                                {
                                                    id: 'alpha',
                                                    x: 5,
                                                    y: 25
                                                },
                                                {
                                                    id: 'alpha',
                                                    x: 6,
                                                    y: 13
                                                },
                                                {
                                                    id: 'beta',
                                                    x: 4,
                                                    y: 17
                                                },
                                                {
                                                    id: 'beta',
                                                    x: 5,
                                                    y: 8
                                                },
                                                {
                                                    id: 'beta',
                                                    x: 6,
                                                    y: 13
                                                }
                                            ],
                                            groupBy: 'id',
                                            height: 300
                                        }} />
                                    </Grid> */}
                                </Grid>
                            </GraphContainer>
                        </>
                    )
            }
        </Wrapper>
    )
}

export default Municipality;