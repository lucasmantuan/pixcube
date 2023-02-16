import { Box, useTheme } from '@mui/material';

export const Base = ({ children }) => {
    const theme = useTheme();

    return (
        <Box
            display='flex'
            flexDirection='column'>
            <Box
                flexShrink={1}
                marginX={theme.spacing(2)}
                marginTop={theme.spacing(9)}
                overflow='hidden'>
                {children}
            </Box>
        </Box>
    );
};
