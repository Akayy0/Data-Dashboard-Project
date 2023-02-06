import { FooterContainer, TextStyled, FlexDiv, DefaultText, FlexColumn } from "./Footer.style";
import { useNavigate } from "react-router-dom";

function Footer() {
    
    const navigate = useNavigate();

    function redirectRoute(route: string) {
        navigate(`/${route}`);
    } 

    return (
        <FooterContainer>
            <FlexDiv>
                <TextStyled>
                    DATA MINAS
                </TextStyled>
            </FlexDiv>

            <FlexColumn>
                    <DefaultText variant="text" onClick={() => redirectRoute('home')}>
                        Home
                    </DefaultText>
                    <DefaultText variant="text" onClick={() => redirectRoute('sobre')}>
                        Sobre
                    </DefaultText>
                    <DefaultText variant="text" onClick={() => redirectRoute('mapas')}>
                        Mapas
                    </DefaultText>
            </FlexColumn>
        </FooterContainer>
    );
}

export default Footer;