import { DefaultText, FlexDiv, HeaderContainer } from "./Header.style";
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    function redirectRoute(route: string) {
        navigate(`/${route}`);
    } 

    return (
        <HeaderContainer>
            <FlexDiv>
                <DefaultText variant="text" onClick={() => redirectRoute('mapas')}>
                    Mapas
                </DefaultText>
                <ZoomOutMapIcon fontSize="large"/>
                <DefaultText variant="text" onClick={() => redirectRoute('sobre')}>
                    Sobre
                </DefaultText>      
            </FlexDiv>
        </HeaderContainer>

    );
}

export default Header;

