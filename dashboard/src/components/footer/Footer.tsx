import { FooterContainer, FlexDiv, DefaultText, HelperText, Title, FlexCollumDiv } from "./Footer.style";
import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate = useNavigate();

    function redirectRoute(route: string) {
        navigate(`/${route}`);
    }

    return (
        <FooterContainer>

            <FlexCollumDiv >
                <Title>
                    DATA MINAS:
                </Title>
                <HelperText>
                    Explore, compare, e conheça mais de Minas Gerais
                </HelperText>
            </FlexCollumDiv>

            <FlexDiv >
                <DefaultText onClick={() => redirectRoute('home')}>
                    Home
                </DefaultText>
                <DefaultText onClick={() => redirectRoute('mapas')}>
                    Mapas
                </DefaultText>
                <DefaultText onClick={() => redirectRoute('sobre')}>
                    Sobre
                </DefaultText>
            </FlexDiv>

        </FooterContainer>
    );
}

export default Footer;