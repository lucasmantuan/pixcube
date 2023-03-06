import { Avatar, Box, Typography, useTheme } from '@mui/material';

export const User = () => {
    const theme = useTheme();

    return (
        <Box
            padding={theme.spacing(2)}
            alignItems='center'
            display='flex'>
            <Avatar>LM</Avatar>
            <Typography
                marginLeft={theme.spacing(1.5)}
                variant='smallbody'>
                Seja bem-vindo Lucas Mantuan.
            </Typography>
        </Box>
    );
};
