import { DarkModeOutlined as DarkIcon, HelpOutlineOutlined as HelpIcon, LightModeOutlined as LightIcon, LoginOutlined as LoginIcon, MenuOutlined as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Divider, Drawer, IconButton, List, Paper, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Item } from "components";
import { useMenuContext, useThemeContext } from "contexts";
import Logo from "images/logo.svg";

export const Menu = ({ children }) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const { openMenu, handleOpenMenu, optionsMenu, titleBar } = useMenuContext();
    const { toggleTheme } = useThemeContext();

    return (
        <>
            <AppBar
                elevation={ 0 }
                position="fixed"
                sx={ { width: mdDown ? "100%" : `calc(100% - ${theme.spacing(26)})` } }>
                <Paper
                    elevation={ 0 }
                    square={ true }
                    sx={ { height: 8 } }>
                </Paper>
                <Toolbar
                    variant="dense">
                    { mdDown && (
                        <IconButton
                            color="inherit"
                            onClick={ handleOpenMenu }>
                            <MenuIcon />
                        </IconButton>
                    ) }
                    <Typography
                        variant="body1"
                        sx={ { flexGrow: 1 } }>
                        { titleBar }
                    </Typography>
                    <IconButton
                        color="inherit">
                        <HelpIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                onClose={ handleOpenMenu }
                open={ openMenu }
                variant={ mdDown ? "temporary" : "permanent" }>
                <Box
                    height="100%"
                    width={ theme.spacing(26) }>
                    <Box
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                        paddingTop={ 1 }
                        paddingBottom={ 2 }>
                        <Box
                            component="img"
                            src={ Logo }
                            width={ theme.spacing(22) } />
                    </Box>
                    <Divider />
                    <IconButton
                        size="small">
                        <LoginIcon />
                    </IconButton>
                    <Divider />
                    <List
                        component="nav">
                        { optionsMenu.map((option) => (
                            <Item
                                icon={ option.icon }
                                key={ option.id }
                                label={ option.label }
                                onClick={ mdDown ? handleOpenMenu : null }
                                path={ option.path } />
                        )) }
                    </List>
                    <Divider />
                    <IconButton
                        size="small"
                        onClick={ toggleTheme } >
                        { theme.palette.mode === "light" ? <DarkIcon /> : <LightIcon /> }
                    </IconButton>
                    <Divider />
                </Box>
            </Drawer>
            <Box
                marginLeft={ mdDown ? 0 : theme.spacing(26) } >
                { children }
            </Box>
        </>
    );
};
