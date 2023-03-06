import { DarkModeOutlined as DarkIcon, LightModeOutlined as LightIcon } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { useThemeContext } from 'contexts';

export const ThemeSelector = () => {
    const theme = useTheme();
    const { toggleTheme } = useThemeContext();

    return (
        <List>
            <ListItem sx={{ padding: 0 }}>
                <ListItemButton
                    dense={true}
                    onClick={toggleTheme}>
                    <ListItemIcon sx={{ minWidth: theme.spacing(5) }}>{theme.palette.mode == 'light' ? <DarkIcon /> : <LightIcon />}</ListItemIcon>
                    <ListItemText primary={theme.palette.mode == 'light' ? 'Dark' : 'Light'}></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    );
};
