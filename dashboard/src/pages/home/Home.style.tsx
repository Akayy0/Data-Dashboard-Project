import { styled, Typography, Container } from "@mui/material";

export const Wrapper = styled(Container)(() => ({
    minWidth: "100%",
    height: "100%",
    padding: "0 !important",
    margin: 0,

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