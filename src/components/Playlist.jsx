import { SettingsOutlined as SettingsIcon } from '@mui/icons-material';
import {
    Box,
    Fade,
    IconButton,
    Paper,
    Typography,
    useTheme
} from '@mui/material';
import { useAdsContext } from 'contexts';
import { Droppable } from 'react-beautiful-dnd';
import { Anuncio } from './Anuncio';

export function Playlist({ playlist, type, editable }) {
    const theme = useTheme();

    const { anuncios, onEditPlaylist } = useAdsContext();

    return (
        <Droppable droppableId={String(playlist.id)}>
            {(provided) => (
                <Fade
                    in={true}
                    timeout={300}>
                    <Box
                        component={Paper}
                        variant='outlined'
                        bgcolor={playlist.color}
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
                                    <Typography variant='smallestbody'>
                                        Playlist: {playlist.title}
                                    </Typography>
                                    <Typography variant='smallestbody'>
                                        Anúncios: {playlist.ads.length}
                                    </Typography>
                                </Box>
                                <IconButton
                                    size='small'
                                    color='inherit'
                                    onClick={() => onEditPlaylist(playlist.id)}>
                                    <SettingsIcon fontSize='inherit' />
                                </IconButton>
                            </Box>
                        )}
                        {!editable &&
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
                </Fade>
            )}
        </Droppable>
    );
}
