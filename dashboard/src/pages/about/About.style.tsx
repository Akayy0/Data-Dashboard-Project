import { styled, Typography, Box } from "@mui/material";

export const AboutContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 0,
    width: "100%",
    backgroundColor: theme.palette.info.dark
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 0,
    maxWidth: theme.breakpoints.values.lg,
    paddingTop: 40,
    backgroundColor: theme.palette.background.default
}));

export const TextTitle = styled(Typography)(({ theme }) => ({
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 16,
    textAlign: "center",
    [theme.breakpoints.down(340)]: {
        fontSize: "32px"
    }
}));

export const TextAbout = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 700,
    textAlign: "justify",
    [theme.breakpoints.down(340)]: {
        fontSize: "32px"
    }
}));

export const LogoImg = styled("img")(() => ({
    width: 140,
    marginLeft: 16,
    objectFit: "cover"
}));