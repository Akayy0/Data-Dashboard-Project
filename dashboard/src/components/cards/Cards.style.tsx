import {Card, styled, Typography } from "@mui/material";

export const CardTitle = styled(Typography) (({theme})=> ({
    color: theme.palette.primary.main,
    textAlign: 'center',
    width:'100%'
}));

export const CardStyled = styled(Card) (()=> ({
    width: '100%',
    borderRadius: 6,
    margin: 4
}));