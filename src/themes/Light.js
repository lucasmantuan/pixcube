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
            fontSize: '0.775rem',
            lineHeight: 1.4,
            letterSpacing: '0.030em'
        },
        smallestbody: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '0.655rem',
            lineHeight: 1.5,
            letterSpacing: '0.025em'
        }
    }
});
