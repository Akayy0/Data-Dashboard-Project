import { PaletteOptions } from '@mui/material';

export const defaultTheme: PaletteOptions = {
    mode: 'light',
    background: {
        default: '#ECEFF8',
        paper: '#00112C'
    },
    primary: {
        main: "#F6F6F6",
        contrastText: '#be0000'
    },
    secondary: {
        main: "#a5abb6",
        contrastText: '#a7b5cc',
        dark: "#141B2E"
    },
    info: {
        main: '#13223A',
        dark: '#142E58',
        light: '#a7b5cc'
    },
    text: {
        primary: '#373737',
        secondary: '#878787',
        disabled: '#a7a7a7'
    }
};