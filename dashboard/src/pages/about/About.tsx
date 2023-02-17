import { AboutContainer, LogoImg, TextTitle, TextAbout, ContentContainer } from "./About.style";
import { Grid } from "@mui/material";
import { LogoDataMinasBlack, LogoDataViva, LogoMinas } from "../../assets";

function About() {

    return (
        <AboutContainer>
            <ContentContainer>
                <Grid container rowSpacing={3} justifyContent="center" p={10} pt={0}>
                    <Grid item xs={10}>
                        <iframe width="100%" height="520" src="https://www.youtube.com/embed/uUEnQoJ4nHk" title="Conheça o DataViva"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    </Grid>
                    <Grid item xs={8} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <LogoImg src={LogoMinas} />
                        <LogoImg src={LogoDataViva} />
                        <LogoImg src={LogoDataMinasBlack} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle>Sobre o Projeto</TextTitle>
                        <TextAbout>
                            Como segundo projeto do treinamento dos bolsistas do DataViva, ficamos encarregados de desenvolver um Dashboard com dados de nossa terra, Minas Gerais.
                            Este site conta com informações e dados importantes sobre nossa infraestrutura, economia, educação , etc.
                            A plataforma foi desenvolvida utilizando as tecnologias: React, Typescript, de forma a priorizar a facilidade da coleta de informações e vizualização dos dados.
                            Utilizamos como inspiração outro site de divulgação de dados, o DataUsa, utilizamos a ideia simples do layout e aplicamos ao nosso projeto de forma original.
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle >Sobre o DataViva</TextTitle>
                        <TextAbout >
                            Todos os desenvolvedores participantes deste projeto são bolsistas do DataViva, que é um projeto de codigo aberto que agrupa dados de todo nosso pais.
                            Como uma forma de treinamento fomos direcionados a criar um dashboard semelhante ao que encontramos no site principal do DataViva, porém, neste caso, de uma forma mais resumida.
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle>Sobre a API</TextTitle>
                        <TextAbout>
                            Utilizamos a API do DataViva para nos ajudar no agrupamento dos dados que gostariamos de utilizar em nosso site, neste caso, utilizamos apenas as informações referentes a Minas Gerais,
                            a API em si, nos entrega dados de todos os estados brasileiros, com informaçoes diversas sobre a infraestrutura, economia e educação dos estados desejados.
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12} >
                        <TextTitle >Sobre Nós</TextTitle>
                        <TextAbout >
                            Este projeto foi realizado por João Vitor Otoni, Kayque Siqueira, Marcos Pantuza, Rubens Castro e Samuel Bernardes.
                            Como segundo projeto de nivelamento do time de desenvolvimento de 2023 do site "Dataviva".
                        </TextAbout>
                    </Grid>

                </Grid>
            </ContentContainer>

        </AboutContainer>
    )
}


export default About;