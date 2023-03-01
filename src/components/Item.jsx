import { Icon, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

export const Item = ({ icon, path, label, onClick }) => {
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(path);
    const theme = useTheme();

    const match = useMatch({
        path: resolvedPath.pathname,
        end: false
    });

    const handleClick = () => {
        navigate(path);
        onClick?.();
    };

    return (
        <ListItemButton
            dense={true}
            onClick={handleClick}
            selected={!!match}>
            <ListItemIcon sx={{ minWidth: theme.spacing(5) }}>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText
                sx={{ marginTop: theme.spacing(1) }}
                primary={label}
            />
        </ListItemButton>
    );
};
