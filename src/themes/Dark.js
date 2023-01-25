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
    }
});
