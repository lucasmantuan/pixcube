import { SettingsOutlined as SettingsIcon } from '@mui/icons-material';
import { Box, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { useAdsContext } from 'contexts';
import { Droppable } from 'react-beautiful-dnd';
import { Anuncio } from './Anuncio';

export function Playlist({ playlist, type, editable }) {
    const theme = useTheme();

    console.log(theme);

    const { anuncios, onEditPlaylist } = useAdsContext();

    return (
        <Droppable
            droppableId={playlist.id}>
            {(provided) =>
                <Box
                    component={Paper}
                    variant='outlined'
                    bgcolor={theme.palette[playlist.color]?.light}
                    borderRadius={theme.spacing(1)}
                    margin={theme.spacing(1)}
                    minHeight={theme.spacing(6)}
                    padding={theme.spacing(1)}
                    ref={provided.innerRef}
                    display='flex'
                    flexBasis='100%'
                    flexWrap='wrap'
                    justifyContent='space-around'
                    {...provided.droppableProps}>
                    {editable &&
                        <Box
                            display='flex'
                            flexGrow={1}>
                            <Box
                                display='flex'
                                flexDirection='column'
                                flexGrow={1}
                                flexWrap='wrap'>
                                <Typography
                                    variant='smallestbody'>
                                    Playlist: {playlist.title}
                                </Typography>
                                <Typography
                                    variant='smallestbody'>
                                    Anúncios: {playlist.anuncios.length}
                                </Typography>
                            </Box>
                            <IconButton
                                size="small"
                                color='inherit'
                                onClick={onEditPlaylist}>
                                <SettingsIcon
                                    fontSize='inherit' />
                            </IconButton>
                        </Box>}
                    {!editable && playlist.anuncios
                        .map((id) => anuncios[id])
                        .map((anuncio, index) => (
                            <Anuncio
                                key={anuncio.id}
                                anuncio={anuncio}
                                index={index}
                                type={type} />
                        ))}
                    {provided.placeholder}
                </Box>}
        </Droppable>
    );
}