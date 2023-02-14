import React, { useState, useEffect } from "react";
import { AboutContainer, LogoDiv, LogoImg, TextDiv, TextTitle, TextAbout, ContentContainer } from "./About.style";
import { LogoDataViva, LogoDataMinas } from "../../assets";
import { Grid, useTheme } from "@mui/material";


function About() {

    const theme = useTheme();

    return (
        <AboutContainer>
            <ContentContainer>
                <Grid container rowSpacing={3} justifyContent="center">
                    <Grid item xs={10}>
                        <iframe width="100%" height="520" src="https://www.youtube.com/embed/uUEnQoJ4nHk" title="Conheça o DataViva"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    </Grid>
                    <Grid item xs={8} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <LogoImg src={LogoDataViva} />
                        <LogoImg src={LogoDataMinas} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle>Sobre o Projeto</TextTitle>
                        <TextAbout>
                            Como segundo projeto do treinamento dos bolsistas do DataViva, ficamos encarregados de desenvolver um Dashboard com dados de nossa terra, Minas Gerais.
                            Este site conta com informações e dados importantes sobre nossa infraestrutura, economia, educação , etc.
                            Desenvolvido utilizando React com Typescript, priorizamos a facilidade da coleta de informações.
                            Utilizamos como inspiração outro site conhecido sobre dados, conhecido como DataUsa, pegamos a ideia simples do layout e aplicamos ao nosso projeto de forma original.
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle >Sobre o DataViva</TextTitle>
                        <TextAbout >
                            Todos os desenvolvedores participantes deste projeto são bolsistas do DataViva, que e um projeto de codigo aberto que agrupa dados de todo nosso pais.
                            Como uma forma de treinamento fomos direcionados a criar um dashboard semelhante ao que encontramos no site principal do DataViva, porem, neste caso, de uma forma mais resumida
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle>Sobre a API</TextTitle>
                        <TextAbout>
                            Utilizamos a API do DataViva para nos ajudar no agrupamento dos dados que gostariamos de utilizar em nosso site, neste caso, utilizamos apenas as informações referentes a Minas Gerais,
                            a API em si, nos entrega dados de todos os estados brasileiros, com informaçoes diversas sobre a infraestrutura, economia e educação dos estados desejados
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12} >
                        <TextTitle >Sobre Nós</TextTitle>
                        <TextAbout >
                            Este projeto foi realizado por João Vitor Otoni, Kayque Siqueira, Marcos Pantuza, Rubens Castro e Samuel Santos
                            como segundo projeto de nivelamento do time de desenvolvimento de 2023 do site "Dataviva".
                        </TextAbout>
                    </Grid>

                </Grid>
            </ContentContainer>

        </AboutContainer>
    )
}


export default About;