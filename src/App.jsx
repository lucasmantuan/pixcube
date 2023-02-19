import { CssBaseline } from '@mui/material';
import { Menu } from 'components';
import {
    AdsProvider,
    AppThemeProvider,
    MenuProvider,
    PopupProvider
} from 'contexts';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';

export const App = () => {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <PopupProvider>
                <MenuProvider>
                    <AdsProvider>
                        <BrowserRouter>
                            <Menu>
                                <AppRoutes />
                            </Menu>
                        </BrowserRouter>
                    </AdsProvider>
                </MenuProvider>
            </PopupProvider>
        </AppThemeProvider>
    );
};
