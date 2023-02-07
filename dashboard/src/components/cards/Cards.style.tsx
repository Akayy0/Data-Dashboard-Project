import {styled, Typography } from "@mui/material";

export const CardTitle = styled(Typography) (({theme})=> ({
    color: theme.palette.primary.main,
    textAlign: 'center',
    width:'100%'
}))
