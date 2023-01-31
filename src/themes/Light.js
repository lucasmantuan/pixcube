import { createTheme } from "@mui/material";
import { grey, teal } from "@mui/material/colors";

export const Light = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: teal[ 700 ]
        },
        background: {
            default: grey[ 50 ]
        }
    },
    typography: {
        body3: {
            fontWeight: 300,
            fontSize: "0.875rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em"
        }
    }
});
