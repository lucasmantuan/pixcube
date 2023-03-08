import { Settings as SettingsIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Box, Fade, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { Anuncio } from 'components';
import { useAdsContext } from 'contexts';
import { Droppable } from 'react-beautiful-dnd';

export function Playlist({ playlist, type, editable }) {
    const theme = useTheme();
    const { anuncios, loading, onEditPlaylist } = useAdsContext();

    function corSelector(id) {
        let color;
        let mode = theme.palette.mode;

        if (mode == 'light') {
            if (id == 0) {
                color = theme.palette.common.white;
            } else {
                color = theme.palette[playlist.color].light;
            }
        } else {
            if (id == 0) {
                color = theme.palette.common.white;
            } else {
                color = theme.palette[playlist.color].dark;
            }
        }
        return color;
    }

    return (
        <Droppable droppableId={String(playlist.id)}>
            {(provided) => (
                <Fade
                    in={true}
                    timeout={300}>
                    <Box
                        bgcolor={corSelector(playlist.id)}
                        borderRadius={0}
                        component={Paper}
                        margin={theme.spacing(1)}
                        maxHeight={`calc(100% - ${theme.spacing(7)})`}
                        minHeight={theme.spacing(6)}
                        overflow='auto'
                        padding={theme.spacing(1)}
                        ref={provided.innerRef}
                        variant='outlined'
                        display='flex'
                        flexBasis='100%'
                        flexWrap='wrap'
                        sx={{
                            scrollbarColor: 'rgba(211, 210, 209, 0.5) rgba(93, 92, 91, 0.5)',
                            '&::-webkit-scrollbar': {
                                backgroundColor: 'rgba(211, 210, 209, 0.5)',
                                width: 4
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'rgba(93, 92, 91, 0.5)'
                            }
                        }}
                        {...provided.droppableProps}>
                        {editable && (
                            <Box
                                width='100%'
                                display='flex'
                                flexGrow={1}>
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    flexGrow={1}
                                    flexWrap='wrap'>
                                    <Typography variant='smallestbody'>Playlist: {playlist.title}</Typography>
                                    <Typography variant='smallestbody'>Anúncios: {playlist.ads.length}</Typography>
                                </Box>
                                <IconButton onClick={() => onEditPlaylist(playlist.id)}>
                                    <SettingsIcon fontSize='small' />
                                </IconButton>
                                <IconButton onClick={() => onEditPlaylist(playlist.id)}>
                                    <DeleteIcon fontSize='small' />
                                </IconButton>
                            </Box>
                        )}
                        <Box
                            maxHeight='100%'
                            overflow='auto'
                            display='flex'
                            flexBasis='100%'
                            flexWrap='wrap'
                            justifyContent='space-around'>
                            {!loading &&
                                !editable &&
                                playlist.ads
                                    .map((id) => anuncios[id])
                                    .map((anuncio, index) => (
                                        <Anuncio
                                            key={anuncio.id}
                                            anuncio={anuncio}
                                            index={index}
                                            type={type}
                                        />
                                    ))}
                            {provided.placeholder}
                        </Box>
                    </Box>
                </Fade>
            )}
        </Droppable>
    );
}
