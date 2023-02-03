import {Box, Button, styled} from "@mui/material";

export const DefaultText = styled(Button)(() => ({
    fontSize: 16,
    fontWeight: 700
}));

export const HeaderContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: "0!important",
    margin: 0
}));

export const FlexDiv = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%"
}));