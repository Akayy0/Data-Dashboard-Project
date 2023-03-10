import { Box, Button, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    padding: 6,
    height: 60
}));

export const DefaultText = styled(Button)(() => ({
    fontSize: 16,
    fontWeight: 700,
    color: "#F2F2F2"
}));

export const FlexDiv = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}));

export const Logo = styled("img")(() => ({
    height: 40,
    objectFit: "contain",
    cursor: "pointer"
}));