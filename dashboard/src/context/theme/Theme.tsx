import { createContext, useContext, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { responsiveFontSizes } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { createTheme, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import { defaultTheme } from './Palettes';
import { IProps, IThemeContext } from './Theme.interface'
import StylesGlobal from './StylesGlobal';;

const ThemeContext = createContext({} as IThemeContext);

function ThemeProvider(props: IProps) {

    const theme = useMemo(() => responsiveFontSizes(
        createTheme({
            palette: defaultTheme,
        })), []);

    return (
        <MaterialThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
                <ThemeContext.Provider value={{ defaultTheme: theme }}>
                    <CssBaseline />
                    <StylesGlobal />
                    {props.children}
                </ThemeContext.Provider>
            </EmotionThemeProvider>
        </MaterialThemeProvider>
    );
}

function useThemeState() {
    return useContext(ThemeContext);
}

export { ThemeProvider, ThemeContext, useThemeState };