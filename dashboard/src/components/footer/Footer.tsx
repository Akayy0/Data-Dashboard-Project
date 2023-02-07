import { FooterContainer, FlexDiv, DefaultText, HelperText, Title, FlexCollumDiv, LogoImg, LogoDiv, InputDiv} from "./Footer.style";
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import { LogoDataViva, LogoMinas } from "../../assets";
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
    const navigate = useNavigate();
    const theme = useTheme();

    function redirectRoute(route: string) {
        navigate(`/${route}`);
    }

    return (
        <FooterContainer>
            <FlexCollumDiv>
                <Title>
                    DATA MINAS
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

            <InputDiv>
                <TextField
                    variant="filled"
                    
                    label="Nos mande uma mensagem!"
                    sx={{'.css-14udhmz-MuiInputBase-root-MuiFilledInput-root': {padding: 0}, input: { color: theme.palette.primary.main }}}
                    InputLabelProps={{
                        style: { color: theme.palette.primary.main, fontSize: 12}, 
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" style={{paddingLeft: 20}}>
                                <IconButton>
                                    <MailIcon sx={{color: theme.palette.primary.main}}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

            </InputDiv>

            <LogoDiv>
                <LogoImg src={LogoDataViva}/>
                <LogoImg src={LogoMinas}/>
            </LogoDiv>

        </FooterContainer>
    );
}

export default Footer;