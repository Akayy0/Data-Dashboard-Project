import { styled, Box } from "@mui/material";

export const CardStyled = styled(Box)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.primary.main,
    textShadow: "0 2px 6px #000",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));