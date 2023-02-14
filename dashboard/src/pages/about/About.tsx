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
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
                    </Grid>
                    <Grid item xs={8} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <LogoImg src={LogoDataViva}/>
                        <LogoImg src={LogoDataMinas}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle>Sobre o DataViva</TextTitle>
                        <TextAbout>
                            O DataViva é um projeto de desenvolvimento de aplicações web e mobile utilizando ReactJS e NodeJS.
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle >Sobre a API</TextTitle>
                        <TextAbout >
                            O DataViva é um projeto de desenvolvimento de aplicações web e mobile utilizando ReactJS e NodeJS.
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12}>
                        <TextTitle>Sobre a API</TextTitle>
                        <TextAbout>
                            O DataViva é um projeto de desenvolvimento de aplicações web e mobile utilizando ReactJS e NodeJS.
                        </TextAbout>
                    </Grid>
                    <Grid item xs={12} >
                        <TextTitle >Sobre Nós</TextTitle>
                        <TextAbout >
                            O DataViva é um projeto de desenvolvimento de aplicações web e mobile utilizando ReactJS e NodeJS.
                        </TextAbout>
                    </Grid>
                
                </Grid>
            </ContentContainer>

        </AboutContainer>
    )
}


export default About;