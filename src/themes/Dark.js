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
    }
});
