import { styled, Typography, Container, Box, IconButton, TextField } from "@mui/material";
import { OuroPreto } from "../../assets";

export const Wrapper = styled(Container)(() => ({
    minWidth: "100%",
    height: "100%",
    padding: "0 !important"
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
    fontSize: "48px",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 40,
    [theme.breakpoints.down(340)]: {
        fontSize: "32px"
    }
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: "36px",
    width: "100%",
    textAlign: "center",
    letterSpacing: "4px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "24px"
    }
}));

export const Title = styled(Typography)(({ theme }) => ({
    letterSpacing: "4px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "24px"
    }
}));

export const AutoCompleteTextField = styled(TextField)(() => ({
    border: 0
}));

export const SearchContainer = styled(Container)(() => ({
    height: "70vh",
    paddingTop: 56
}));

export const BoxImage = styled(Box)(() => ({
    backgroundImage: `url(${OuroPreto})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
}));

export const LogoImage = styled('img')(() => ({
    width: '80%',
    margin: 'auto'
}));

export const SearchButton = styled(IconButton)(({ theme }) => ({
    height: "100%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: theme.palette.primary.contrastText
}));