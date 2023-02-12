import { styled, Typography, Container, Box, CircularProgress } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
    minWidth: "100%",
    height: "100%",
    padding: "0 !important"
}));

export const LoadingContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: theme.palette.info.main
}));

export const LoadingElement = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.primary.contrastText
}));

export const LoadingText = styled(Typography)(({ theme }) => ({
    fontSize: 36,
    fontWeight: 700,
    marginTop: 24,
    color: theme.palette.primary.main
}));

export const ContetentContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    height: "80vh",
    width: "100%",
    backgroundPosition:"center", 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover", 
    backgroundColor: theme.palette.info.main
}));

export const CityTitle = styled(Typography)(({ theme }) => ({
    fontSize: 48,
    fontWeight: 700,
    color: theme.palette.primary.main,
    textShadow: "0 2px 6px #000"
}));