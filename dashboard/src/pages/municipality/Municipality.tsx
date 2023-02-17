import { useEffect, useState } from 'react';
import _ from 'lodash';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Divider, Grid, useTheme } from '@mui/material';
// @ts-ignore
import { Treemap, BarChart, Pie, LinePlot } from "d3plus-react";

import { InfoCard } from './components';
import { getUrls } from '../../modules';

import {
    CityTitle, ContetentContainer, GraphContainer, GraphText,
    InfoText, LoadingContainer, LoadingElement, LoadingText,
    StateCard, StateText, TitleGraphText, Wrapper
} from './Municipality.style';

function Municipality() {
    const params = useParams();
    const theme = useTheme();
    const navigate = useNavigate();

    const urls = getUrls(params.cityId ?? "");

    const [loading, setLoading] = useState<boolean>(true);
    const [industryDataArray, setIndustryDataArray] = useState<any[]>([]);
    const [ocupationDataArray, setOcupationDataArray] = useState<any[]>([]);
    const [studentsDataArray, setStudentsDataArray] = useState<any[]>([]);
    const [employeeStudentsArray, setEmployeeStudentsArray] = useState<any[]>([]);
    const [expDataArray, setExpDataArray] = useState<any[]>([]);
    const [impDataArray, setImpDataArray] = useState<any[]>([]);

    const [backgroundImage, setBackgroundImage] = useState<string>("");

    const [students, setStudents] = useState<string>("");
    const [schools, setSchools] = useState<string>("");
    const [healthProfessionals, setHealthProfessionals] = useState<string>("");

    const [expDataYearArray, setExpDataYearArray] = useState<any[]>([]);
    const [impDataYearArray, setImpDataYearArray] = useState<any[]>([]);

    useEffect(() => {
        if (!params) return;

        fetchData();

    }, [params])

    function fetchData() {
        Promise.all(urls)
            .then(resp => Promise.all(resp.map(r => r.json())))
            .then(result => {
                const imageObjectIndex: any = result.findIndex((item) => item.photos);
                setBackgroundImage(result[imageObjectIndex].photos[Math.floor(Math.random() * (29) + 1)].src.original);
                result.splice(imageObjectIndex, 1);

                const industryArray = _.take(result[5].data.sort((a: any, b: any) => b[5] - a[5]), 10);
                const ocupationArray = _.take(result[6].data.sort((a: any, b: any) => b[5] - a[5]), 10);
                const studentsArray = _.take(result[7].data.sort((a: any, b: any) => b[3] - a[3]), 10);
                const employeeStudentsArray = _.take(result[8].data.sort((a: any, b: any) => b[6] - a[6]), 10);
                const imp = result[9].data.filter((item: any) => item[0] === 'import');
                const exp = result[9].data.filter((item: any) => item[0] === 'export');

                const impAndExpEvolve = result[10].data.filter((item: any) => item[1] >= 2015);

                const impEvolve = impAndExpEvolve.filter((item: any) => item[0] === 'import').sort((a: any, b: any) => b[1] - a[1]);
                const expEvolve = impAndExpEvolve.filter((item: any) => item[0] === 'export').sort((a: any, b: any) => b[1] - a[1]);

                let impEvolveArray: any[] = [];
                let expEvolveArray: any[] = [];

                impEvolve.forEach((item: any) => {
                    impEvolveArray.push({ id: "Valor em Reais", x: item[1], y: item[2] });
                })
                expEvolve.forEach((item: any) => {
                    expEvolveArray.push({ id: "Valor em Reais", x: item[1], y: item[2] });
                })

                const exportArray = _.take(exp.sort((a: any, b: any) => b[3] - a[3]), 5);
                const importArray = _.take(imp.sort((a: any, b: any) => b[3] - a[3]), 5);

                getIndustryNames(industryArray);
                getOcupationNames(ocupationArray);
                getStudents(studentsArray);
                getEmployeeStudents(employeeStudentsArray);
                getImportsAndExports(importArray, exportArray);

                setStudents(result[1]?.data[0][2] ?? "");
                setSchools(result[1]?.data[0][5] ?? "");
                setHealthProfessionals(result[3]?.data[0][1] ?? "");
                setImpDataYearArray(impEvolveArray);
                setExpDataYearArray(expEvolveArray);

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
                    formatedDataArray.push({ id: response[item[0]].name_pt, value: item[5] });
                });

                setIndustryDataArray(formatedDataArray);
            })
    }

    function getImportsAndExports(impArray: any[], expArray: any[]) {
        let formatedExpArray: any[] = [];
        let formatedImpArray: any[] = [];

        fetch("http://api.dataviva.info/metadata/product")
            .then((res) => res.json())
            .then((response) => {
                expArray.forEach((item: any) => {
                    formatedExpArray.push({ id: response[item[2]].name_pt, x: item[4].toLocaleString('pt-br') + "Kg", y: item[3] });
                });
                impArray.forEach((item: any) => {
                    formatedImpArray.push({ id: response[item[2]].name_pt, x: item[4].toLocaleString('pt-br') + "Kg", y: item[3] });
                });

                setExpDataArray(formatedExpArray);
                setImpDataArray(formatedImpArray);
            });
    }

    function getOcupationNames(dataArray: any[]) {
        let formatedDataArray: any[] = [];

        fetch("http://api.dataviva.info/metadata/occupation_family")
            .then((res) => res.json())
            .then((response) => {
                dataArray.forEach((item) => {
                    if (response[item[0]]) formatedDataArray.push({ id: response[item[0]].name_pt, value: item[5] });
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
                    if (response[item[0]]) formatedDataArray.push({ id: response[item[0]].name_pt, value: item[5] });
                });

                setStudentsDataArray(formatedDataArray);
            })
    }

    function getEmployeeStudents(dataArray: any[]) {
        let formatedDataArray: any[] = [];

        fetch("http://api.dataviva.info/metadata/literacy")
            .then((res) => res.json())
            .then((response) => {
                dataArray.forEach((item) => {
                    if (response[item[0]]) formatedDataArray.push({ id: response[item[0]].name_pt, value: item[5] });
                });

                setEmployeeStudentsArray(formatedDataArray);
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
                                <StateCard onClick={() => navigate(`/mapas/${params.cityName}`)}>
                                    <PlaceIcon sx={{ color: "black", marginRight: 0.8 }} />
                                    <StateText>VER NO MAPA</StateText>
                                </StateCard>

                                <InfoText variant="overline" >Dados coletados no período de 2008 - 2017</InfoText>

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
                                    </Grid>
                                </Container>
                            </ContetentContainer>

                            <Divider color={theme.palette.background.paper} />

                            <GraphContainer>
                                <TitleGraphText >Informações gerais sobre o município</TitleGraphText>

                                <Grid container rowSpacing={4} maxWidth="xl" justifyContent="center">
                                    <Grid item xs={12}>

                                        <GraphText variant="h6">Porcentagem de empregos por indústria - 2017</GraphText>
                                        <Treemap config={{

                                            data: industryDataArray,
                                            groupBy: 'id',
                                            sum: 'value',
                                            legend: false,
                                            height: 400,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />

                                    </Grid>

                                    <Grid item xs={12} >
                                        <GraphText variant="h6">Porcentagem de pessoas empregadas por categoria - 2017</GraphText>

                                        <Treemap config={{
                                            data: ocupationDataArray,
                                            groupBy: 'id',
                                            legend: false,
                                            sum: 'value',
                                            height: 400,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <GraphText variant="h6">Matrículas por cursos técnicos - 2017</GraphText>

                                        <Treemap config={{
                                            data: studentsDataArray,
                                            groupBy: 'id',
                                            legend: false,
                                            sum: 'value',
                                            height: 400,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />
                                    </Grid>

                                    <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
                                        <GraphText variant="h6">Porcentagem de empregos por grau de escolaridade - 2017</GraphText>
                                        <Pie config={{
                                            data: employeeStudentsArray,
                                            groupBy: 'id',
                                            sum: 'value',
                                            height: 400,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <GraphText variant="h6">Maiores importações em reais - 2017</GraphText>

                                        <BarChart config={{
                                            data: impDataArray,
                                            groupBy: 'id',
                                            height: 400,
                                            barPadding: 4,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <GraphText variant="h6">Maiores exportações em reais - 2017</GraphText>

                                        <BarChart config={{
                                            data: expDataArray,
                                            groupBy: 'id',
                                            height: 400,
                                            barPadding: 4,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <GraphText variant='h6' width="100%">Evolução das importações desde 2015</GraphText>

                                        <LinePlot config={{
                                            data: impDataYearArray,
                                            groupBy: 'id',
                                            height: 400,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />

                                    </Grid>

                                    <Grid item xs={12}>
                                        <GraphText variant='h6' width="100%">Evolução das exportações desde 2015</GraphText>
                                        <LinePlot config={{
                                            data: expDataYearArray,
                                            groupBy: 'id',
                                            height: 400,
                                            noDataHTML: `
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <h3 style="color: ${theme.palette.primary.dark}">Não há dados para este município.</h3>
                                                </div>`
                                        }} />
                                    </Grid>
                                </Grid>
                            </GraphContainer>
                        </>
                    )
            }
        </Wrapper>
    )
}

export default Municipality;