import { Box, Typography, styled} from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 0,
    width: "100%",
    paddingTop: 40,
    backgroundColor: theme.palette.background.paper
}));

export const DefaultText = styled(Typography)(({ theme }) => ({
    fontSize: 20,
    fontWeight: 700,
    color: theme.palette.primary.main,
    transition: "0.2s",
    cursor: "pointer",
    ':hover': {
        color: theme.palette.primary.contrastText,
    }
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: 32,
    fontWeight: 700,
    color: theme.palette.primary.main
}));

export const HelperText = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 400,
    color: theme.palette.secondary.main
}));

export const FlexDiv = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: '0px 25px',
    marginTop: 40
}));

export const LogoDiv = styled("div")(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: '0px 20px',
    backgroundColor: theme.palette.info.dark,
    width: "100%",
    marginTop: 40
}));

export const FlexCollumDiv = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}));

export const LogoImg = styled("img")(() => ({
    width: 140,
    objectFit: "cover"
}));

export const InputDiv = styled("div")(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
}));
