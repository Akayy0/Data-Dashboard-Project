import { DefaultText, FlexDiv, HeaderContainer, Logo } from "./Header.style";
import { useNavigate } from "react-router-dom";
import { LogoTriangulo } from "../../assets";

function Header() {

    const navigate = useNavigate();

    function redirectRoute(route: string) {
        navigate(`/${route}`);
    }

    return (
        <HeaderContainer>
            <FlexDiv>
                <DefaultText variant="text" onClick={() => redirectRoute('mapas/Minas%20Gerais')}>
                    Mapas
                </DefaultText>
                <Logo src={LogoTriangulo} alt="logo-dataminas" onClick={() => redirectRoute("home")} />
                <DefaultText variant="text" onClick={() => redirectRoute('about')}>
                    Sobre
                </DefaultText>
            </FlexDiv>
        </HeaderContainer>

    );
}

export default Header;

