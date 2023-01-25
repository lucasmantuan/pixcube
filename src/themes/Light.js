import { createTheme } from "@mui/material";
import { grey, teal } from "@mui/material/colors";

export const Light = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: teal[700],
        },
        background: {
            default: grey[50],
        },
    },
});
