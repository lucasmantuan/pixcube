import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "contexts";
import { CssBaseline } from "@mui/material";

export const App = () => {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <BrowserRouter>Teste</BrowserRouter>
        </AppThemeProvider>
    );
};
