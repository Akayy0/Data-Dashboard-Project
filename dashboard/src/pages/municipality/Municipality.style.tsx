import { styled, Typography, Container, Box, CircularProgress } from "@mui/material";

export const Wrapper = styled(Container)(() => ({
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

export const StateCard = styled(Box)(({ theme }) => ({
    display: "flex",
    borderRadius: '3px',
    cursor: "pointer",
    marginTop: 24,
    marginBottom: 48,
    backgroundColor: "#879bf5",
    padding: "5px 10px 5px 8px",
    textShadow: 'none',
    justifyContent: "center",
    alignItems: "center",
    transition: "0.2s",
    ':hover': {
        backgroundColor: theme.palette.info.light,
    }
}));

export const StateText = styled(Typography)(() => ({
    fontWeight: 500,
    color: "black"
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
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: 12,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.info.main
}));

export const InfoText = styled(Typography)(({ theme }) => ({
    textShadow: "0 2px 6px #000",
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: 24
}))

export const CityTitle = styled(Typography)(({ theme }) => ({
    fontSize: 48,
    marginTop: 42,
    fontWeight: 700,
    color: theme.palette.primary.main,
    textShadow: "0 2px 6px #000"
}));

export const GraphContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.info.dark,
    padding: 12
}));

export const TitleGraphText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 48,
    marginBottom: 32,
    textShadow: "0 2px 6px #000",
    textDecoration: "underline",
    letterSpacing: "0.5px",
    [theme.breakpoints.down("md")]: {
        fontSize: 36
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 28
    }
}));

export const GraphText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: 16,
    textAlign: "center"
}));