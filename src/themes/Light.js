import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const Light = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: blue[700]
        },
        background: {
            default: grey[50]
        }
    },
    typography: {
        smallbody: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '0.785rem',
            lineHeight: 1.4,
            letterSpacing: '0.030em'
        },
        smallestbody: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '0.685rem',
            lineHeight: 1.5,
            letterSpacing: '0.025em'
        }
    }
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: {
    //             body: {
    //                 scrollbarColor: '#6b6b6b #2b2b2b',
    //                 '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    //                     backgroundColor: 'lightgrey',
    //                     width: 8
    //                 },
    //                 '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    //                     borderRadius: 8,
    //                     backgroundColor: '#6b6b6b',
    //                     minHeight: 24,
    //                     border: '3px solid #2b2b2b'
    //                 },
    //                 '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    //                     backgroundColor: '#959595'
    //                 },
    //                 '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    //                     backgroundColor: '#959595'
    //                 },
    //                 '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    //                     backgroundColor: '#959595'
    //                 },
    //                 '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    //                     backgroundColor: '#2b2b2b'
    //                 }
    //             }
    //         }
    //     }
    // }
});
