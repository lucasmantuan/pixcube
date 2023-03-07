import { createTheme } from '@mui/material';
import { grey, indigo } from '@mui/material/colors';

export const Dark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: indigo[700]
        },
        background: {
            default: grey[900]
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
});
