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
                        bgcolor={playlist.color}
                        borderRadius={theme.spacing(1)}
                        component={Paper}
                        margin={theme.spacing(1)}
                        maxHeight={`calc(100% - ${theme.spacing(5)})`}
                        minHeight={theme.spacing(6)}
                        overflow='hidden'
                        padding={theme.spacing(1)}
                        ref={provided.innerRef}
                        variant='outlined'
                        display='flex'
                        flexBasis='100%'
                        flexWrap='wrap'
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
                        <Box
                            maxHeight='100%'
                            overflow='auto'
                            display='flex'
                            flexBasis='100%'
                            flexWrap='wrap'
                            justifyContent='space-around'>
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
                    </Box>
                </Fade>
            )}
        </Droppable>
    );
}
