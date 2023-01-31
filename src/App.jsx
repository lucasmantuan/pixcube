import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider, MenuProvider } from "contexts";
import { CssBaseline } from "@mui/material";
import { Menu } from "components";
import { AppRoutes } from "routes";

export const App = () => {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <MenuProvider>
                <BrowserRouter>
                    <Menu>
                        <AppRoutes />
                    </Menu>
                </BrowserRouter>
            </MenuProvider>
        </AppThemeProvider>
    );
};
