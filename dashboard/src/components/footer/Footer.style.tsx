import {Box, Typography, styled, Button} from "@mui/material";

export const FooterContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: "0!important",
    margin: 0,
    background: "#FF6347",
    borderRadius: "5px"
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

export const DefaultText = styled(Button)(() => ({
    fontSize: 16,
    fontWeight: 700,
    width:"75%"
}));

export const FlexDiv = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%"
}));

export const FlexColumn = styled("div")(() => ({
    display: "flex",
    width: "20%",
    textalign:"left",
    color: "black",
    flexdirection: "column"
}));