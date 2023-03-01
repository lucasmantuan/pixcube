import { AddCircleOutline as AddIcon, ChevronRight as ChevronRightIcon, RemoveCircleOutline as RemoveIcon } from '@mui/icons-material';
import { Box, Grid, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Playlist } from 'components';
import { useAdsContext, useMenuContext } from 'contexts';
import { Base } from 'pages';
import { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// import { useForm } from 'react-hook-form';

export function PlaylistCreator() {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { handleTitleBar } = useMenuContext();
    // const { openPopup, closePopup } = usePopupContext();
    const { order, playlists, loading, onDragEnd } = useAdsContext();

    useEffect(() => {
        handleTitleBar('Criador de Playlists');
    }, []);

    // const handlePopupCreatePlaylist = () => {
    //     openPopup({
    //         title: 'Criar Playlist',
    //         onClose: closePopup,
    //         contentText: 'Você deseja criar uma nova playlist?',
    //         contentForm: (
    //             <TextField
    //                 fullWidth
    //                 label='Nome da Playlist'
    //                 name='title'
    //                 size='small'
    //                 {...register('title')}
    //             />
    //         ),
    //         actions: (
    //             <>
    //                 <Button
    //                     onClick={() => {
    //                         closePopup();
    //                     }}
    //                     autoFocus>
    //                     Não
    //                 </Button>
    //                 <Button
    //                     onClick={() => {
    //                         handleSubmit((data) => onCreatePlaylist(data))();
    //                         closePopup();
    //                     }}>
    //                     Sim
    //                 </Button>
    //             </>
    //         )
    //     });
    // };

    return (
        <Base>
            <DragDropContext onDragEnd={onDragEnd}>
                <Grid
                    container
                    spacing={4}>
                    <Grid
                        item
                        xs={12}
                        lg={4}>
                        <Box
                            component={Paper}
                            height={mdDown ? null : `calc(100vh - ${theme.spacing(11)})`}
                            padding={theme.spacing(2)}
                            variant='outlined'
                            display='flex'
                            alignContent='flex-start'
                            alignItems='center'
                            flexWrap='wrap'>
                            <ChevronRightIcon fontSize='small' />
                            <Typography
                                variant='subtitle2'
                                align='left'
                                flexGrow={1}>
                                {!loading && playlists[order[0].playlists[0]].title}
                            </Typography>
                            <IconButton size='small'>
                                <AddIcon />
                            </IconButton>
                            {!loading &&
                                order[0].playlists
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
                            height={mdDown ? null : `calc(100vh - ${theme.spacing(11)})`}
                            padding={theme.spacing(2)}
                            display='flex'
                            alignContent='flex-start'
                            flexWrap='wrap'>
                            <ChevronRightIcon fontSize='small' />
                            <Typography
                                variant='subtitle2'
                                align='left'
                                flexGrow={1}>
                                {!loading && playlists[order[0].playlists[1]].title}
                            </Typography>
                            <IconButton size='small'>
                                <RemoveIcon />
                            </IconButton>
                            {!loading &&
                                order[0].playlists
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
                            height={mdDown ? null : `calc(100vh - ${theme.spacing(11)})`}
                            padding={theme.spacing(2)}
                            display='flex'
                            alignContent='flex-start'
                            flexWrap='wrap'>
                            <ChevronRightIcon fontSize='small' />
                            <Typography
                                variant='subtitle2'
                                align='left'
                                flexGrow={1}>
                                Outras Playlists
                            </Typography>
                            <IconButton size='small'>
                                <AddIcon />
                            </IconButton>
                            {!loading &&
                                order[0].playlists
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
