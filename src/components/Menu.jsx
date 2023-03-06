import { HelpOutlined as HelpIcon, MenuOutlined as MenuIcon, SaveOutlined as SaveIcon } from '@mui/icons-material';
import { AppBar, Box, Divider, Drawer, Fade, IconButton, LinearProgress, List, Paper, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { Item, ThemeSelector, User } from 'components';
import { useAdsContext, useMenuContext } from 'contexts';
import Logo from 'images/logo.svg';

export const Menu = ({ children }) => {
    const theme = useTheme();
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    const { openMenu, handleOpenMenu, optionsMenu, titleBar } = useMenuContext();
    const { loading, saving } = useAdsContext();

    return (
        <>
            <AppBar
                elevation={0}
                position='fixed'
                sx={{
                    width: lgDown ? '100%' : `calc(100% - ${theme.spacing(26)})`
                }}>
                <Paper
                    elevation={0}
                    square={true}
                    sx={{ height: 8 }}
                />
                <Toolbar variant='dense'>
                    {lgDown && (
                        <IconButton
                            color='inherit'
                            onClick={handleOpenMenu}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography
                        variant='subtitle1'
                        flexGrow={1}>
                        {titleBar}
                    </Typography>
                    {saving && (
                        <Fade in={true}>
                            <SaveIcon color='inherit' />
                        </Fade>
                    )}
                    <IconButton color='inherit'>
                        <HelpIcon />
                    </IconButton>
                </Toolbar>
                <Stack
                    height={theme.spacing(0.5)}
                    width='100%'>
                    {(loading || saving) && (
                        <LinearProgress
                            padding={0}
                            variant='indeterminate'
                        />
                    )}
                </Stack>
            </AppBar>
            <Drawer
                onClose={handleOpenMenu}
                open={openMenu}
                variant={lgDown ? 'temporary' : 'permanent'}>
                <Box
                    height='100%'
                    width={theme.spacing(26)}
                    display='flex'
                    flexDirection='column'>
                    <Box
                        paddingTop={1}
                        paddingBottom={2}
                        display='flex'
                        alignContent='center'
                        justifyContent='center'>
                        <Box
                            component='img'
                            src={Logo}
                            width={theme.spacing(22)}
                        />
                    </Box>
                    <Divider />
                    <User />
                    <Divider />
                    <Box flexGrow={1}>
                        <List component='nav'>
                            {optionsMenu.map((option) => (
                                <Item
                                    icon={option.icon}
                                    key={option.id}
                                    label={option.label}
                                    onClick={lgDown ? handleOpenMenu : null}
                                    path={option.path}
                                />
                            ))}
                        </List>
                    </Box>
                    <Divider />
                    <ThemeSelector />
                    <Divider />
                </Box>
            </Drawer>
            <Box marginLeft={lgDown ? 0 : theme.spacing(26)}>{children}</Box>
        </>
    );
};
