import { Box, ThemeProvider } from '@mui/material';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Dark, Light } from 'themes';

const ThemeContext = createContext({});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }) => {
    const [defaultTheme, setDefaultTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setDefaultTheme((old) => (old == 'light' ? 'dark' : 'light'));
    }, []);

    const theme = useMemo(() => {
        if (defaultTheme == 'light') {
            return Light;
        } else {
            return Dark;
        }
    }, [defaultTheme]);

    return (
        <ThemeContext.Provider
            value={{
                defaultTheme,
                toggleTheme
            }}>
            <ThemeProvider theme={theme}>
                <Box
                    height='100%'
                    width='100%'>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
