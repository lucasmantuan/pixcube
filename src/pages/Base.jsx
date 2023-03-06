import { Box, useTheme } from '@mui/material';

export const Base = ({ children }) => {
    const theme = useTheme();

    return (
        <Box
            display='flex'
            flexDirection='column'>
            <Box
                marginX={theme.spacing(2)}
                marginTop={theme.spacing(9.5)}>
                {children}
            </Box>
        </Box>
    );
};
