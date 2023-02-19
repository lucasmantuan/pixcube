import {
    AddCircleOutline as AddIcon,
    ChevronRight as ChevronRightIcon,
    RemoveCircleOutline as RemoveIcon
} from '@mui/icons-material';
import {
    Box,
    Button,
    Grid,
    IconButton,
    Paper,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Playlist } from 'components';
import { useAdsContext, useMenuContext, usePopupContext } from 'contexts';
import { Base } from 'pages';
import { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export function PlaylistCreator() {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const { handleTitleBar } = useMenuContext();
    const { openPopup, closePopup } = usePopupContext();
    const { order, playlists, onDragEnd, onCreatePlaylist } = useAdsContext();

    useEffect(() => {
        handleTitleBar('Criador de Playlists');
    }, []);

    const handlePopupCreatePlaylist = (...props) => {
        openPopup({
            title: 'Criar Playlist',
            content: 'Você deseja criar uma nova playlist?',
            onClose: closePopup,
            actions: (
                <>
                    <Button
                        onClick={() => {
                            closePopup();
                        }}
                        autoFocus>
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => {
                            onCreatePlaylist(...props);
                            closePopup();
                        }}>
                        Criar
                    </Button>
                </>
            )
        });
    };

    return (
        <Base>
            <DragDropContext onDragEnd={onDragEnd}>
                <Grid
                    container
                    height={mdDown ? null : `calc(100vh - ${theme.spacing(9)})`}
                    spacing={4}>
                    <Grid
                        item
                        xs={12}
                        lg={4}>
                        <Box
                            component={Paper}
                            variant='outlined'
                            height='100%'
                            padding={theme.spacing(2)}
                            display='flex'
                            alignContent='flex-start'
                            flexWrap='wrap'>
                            <ChevronRightIcon fontSize='small' />
                            <Typography
                                variant='body2'
                                align='left'
                                flexGrow={1}>
                                {playlists[order[0]].title}
                            </Typography>
                            <IconButton sx={{ padding: 0 }}>
                                <AddIcon />
                            </IconButton>
                            {order
                                .filter((id, index) => index == 0)
                                .map((id) => {
                                    const playlist = playlists[id];
                                    return (
                                        <Playlist
                                            key={playlist.id}
                                            playlist={playlist}
                                            type='card'
                                        />
                                    );
                                })}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={4}>
                        <Box
                            component={Paper}
                            variant='outlined'
                            height='100%'
                            padding={theme.spacing(2)}
                            display='flex'
                            alignContent='flex-start'
                            flexWrap='wrap'>
                            <ChevronRightIcon fontSize='small' />
                            <Typography
                                variant='body2'
                                align='left'
                                flexGrow={1}>
                                {playlists[order[1]].title}
                            </Typography>
                            <IconButton sx={{ padding: 0 }}>
                                <RemoveIcon />
                            </IconButton>
                            {order
                                .filter((id, index) => index == 1)
                                .map((id) => {
                                    const playlist = playlists[id];
                                    return (
                                        <Playlist
                                            key={playlist.id}
                                            playlist={playlist}
                                            type='list'
                                        />
                                    );
                                })}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={4}>
                        <Box
                            component={Paper}
                            variant='outlined'
                            height='100%'
                            padding={theme.spacing(2)}
                            display='flex'
                            alignContent='flex-start'
                            flexWrap='wrap'>
                            <ChevronRightIcon fontSize='small' />
                            <Typography
                                variant='body2'
                                align='left'
                                flexGrow={1}>
                                Outras Playlists
                            </Typography>
                            <IconButton
                                onClick={() => {
                                    handlePopupCreatePlaylist(
                                        'teste',
                                        'purple',
                                        []
                                    );
                                }}
                                sx={{ padding: 0 }}>
                                <AddIcon />
                            </IconButton>
                            {order
                                .filter((id, index) => index > 1)
                                .map((id) => {
                                    const playlist = playlists[id];
                                    return (
                                        <Playlist
                                            key={playlist.id}
                                            playlist={playlist}
                                            type='list'
                                            editable
                                        />
                                    );
                                })}
                        </Box>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Base>
    );
}
