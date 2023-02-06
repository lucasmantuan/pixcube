import { createTheme } from "@mui/material";
import { grey, blue } from "@mui/material/colors";

export const Light = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: blue[ 700 ]
        },
        background: {
            default: grey[ 50 ]
        }
    }
});
