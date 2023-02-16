import { styled, Typography, Container, Box, IconButton, TextField } from "@mui/material";

export const Wrapper = styled(Container)(() => ({
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: 20
}));

export const MapsTitle = styled(Typography)(({ theme }) => ({
    fontSize: 48,
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    textShadow: "0 2px 6px #000"
}));

export const MapBox = styled(Box)(({ theme }) => ({
    width: "100%",
    border: `2px solid ${theme.palette.background.paper}`
}));