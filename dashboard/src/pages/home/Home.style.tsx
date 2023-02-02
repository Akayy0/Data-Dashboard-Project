import { styled, Typography } from "@mui/material";
import Container from "@mui/material/Container";

export const Wrapper = styled(Container)(() => ({
    minWidth: "100%",
    height: "100%",
    padding: "0 !important",
    margin: 0,
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
    fontSize: "48px",
    fontWeight: "bold",
    paddingTop: 40,
    paddingBottom: 40,
    [theme.breakpoints.down(340)]: {
        fontSize: "32px"
    }
}));