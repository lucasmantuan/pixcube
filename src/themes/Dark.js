import { createTheme } from "@mui/material";
import { grey, teal } from "@mui/material/colors";

export const Dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: teal[700]
        },
        background: {
            default: grey[900]
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
