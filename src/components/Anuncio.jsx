import { Box, Chip, Stack, Typography, useTheme } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

export function Anuncio({ anuncio, index, type }) {
    const theme = useTheme();

    return (
        <Draggable
            draggableId={anuncio.id}
            index={index}>
            {(provided) => (
                <Box
                    bgcolor='white'
                    borderRadius={theme.spacing(0.5)}
                    margin={theme.spacing(0.5)}
                    ref={provided.innerRef}
                    display='flex'
                    flexBasis={type == 'list' ? '100%' : null}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}>
                    <Stack
                        component='img'
                        borderRadius={theme.spacing(0.5)}
                        src={anuncio.thumb}
                        width={type == 'card' ? theme.spacing(16) : theme.spacing(10)} />
                    {type == 'list' &&
                        <Box
                            display='flex'
                            alignItems='center'>
                            <Chip
                                color='primary'
                                label={anuncio.id}
                                size='small'
                                sx={{ marginX: theme.spacing(1) }} />
                            <Box
                                display='flex'
                                flexDirection='column'
                                flexWrap='wrap'>
                                <Typography
                                    variant='smallbody'>
                                    {anuncio.title?.length > 40
                                        ? anuncio.title.replace(/^(.{1,40})[\s\S]*/, '$1...')
                                        : anuncio.title}
                                </Typography>
                                <Typography
                                    variant='smallestbody'>
                                    {anuncio.created}
                                </Typography>
                            </Box>
                        </Box>}
                </Box>
            )}
        </Draggable>
    );
}