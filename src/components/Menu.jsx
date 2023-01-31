import { DarkModeOutlined as DarkIcon, HelpOutlineOutlined as HelpIcon, LightModeOutlined as LightIcon, MenuOutlined as MenuIcon, LoginOutlined as LoginIcon } from "@mui/icons-material";
import { AppBar, Box, Divider, Drawer, IconButton, List, Paper, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Item } from "components";
import { useMenuContext, useThemeContext } from "contexts";
import Logo from "images/logo.svg";
import { Fragment } from "react";

export const Menu = ({ children }) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const { openMenu, handleOpenMenu, optionsMenu } = useMenuContext();
    const { toggleTheme } = useThemeContext();

    return (
        <Fragment>
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
                        variant="body3"
                        sx={ { flexGrow: 1 } }>
                        Bem Vindo a Pixcube
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
                height="100vh"
                marginLeft={ mdDown ? 0 : theme.spacing(26) }
                paddingTop={ theme.spacing(4) }
                paddingBottom={ theme.spacing(2) }
                paddingRight={ theme.spacing(2) }
                paddingLeft={ theme.spacing(2) } >
                { children }
            </Box>
        </Fragment>
    );
};
