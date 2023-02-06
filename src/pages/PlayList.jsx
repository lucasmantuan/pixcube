import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { Anuncio } from "components";
import { useMenuContext } from "contexts";
import { Base } from "pages";
import { useCallback, useEffect, useReducer } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import produce from "immer";

const anuncios = [
    {
        id: "0",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    },
    {
        id: "1",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    },
    {
        id: "2",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    },
    {
        id: "3",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    },
    {
        id: "4",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    },
    {
        id: "5",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    },
    {
        id: "6",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    },
    {
        id: "7",
        image: "anuncios/anuncio.jpg",
        created: "20-02-2022",
        title: "Nature"
    }
];

const playlist = [];

export const PlayList = () => {
    const theme = useTheme();

    const { handleTitleBar } = useMenuContext();

    const dragReducer = produce((draft, action) => {
        switch (action.type) {
            case "MOVE": {
                draft[ action.from ] = draft[ action.from ] || [];
                draft[ action.to ] = draft[ action.to ] || [];
                const [ removed ] = draft[ action.from ].splice(action.fromIndex, 1);
                draft[ action.to ].splice(action.toIndex, 0, removed);
            }
        }
    });

    const [ state, dispatch ] = useReducer(dragReducer, {
        anuncios,
        playlist
    });

    const onDragEnd = useCallback((result) => {
        if (result.reason === "DROP") {
            if (!result.destination) {
                return;
            }
            dispatch({
                type: "MOVE",
                from: result.source.droppableId,
                to: result.destination.droppableId,
                fromIndex: result.source.index,
                toIndex: result.destination.index,
            });
        }
    }, []);

    useEffect(() => {
        handleTitleBar("Criador de Playlists");
    }, []);

    return (
        <Base>
            <DragDropContext
                onDragEnd={ onDragEnd }>
                <Grid
                    container
                    spacing={ 2 }>
                    <Grid
                        item
                        xs={ 12 }
                        lg={ 4 }>
                        <Box
                            component={ Paper }
                            display="flex"
                            elevation={ 0 }
                            flexWrap="wrap"
                            padding={ theme.spacing(2) }
                            variant="outlined">
                            <ChevronRightIcon
                                fontSize="small" />
                            <Typography
                                align="left"
                                variant="body2">
                                Meus Anúncios
                            </Typography>
                            <Droppable
                                droppableId="anuncios"
                                type="playlist">
                                { (provided) => {
                                    return (
                                        <Box
                                            display="flex"
                                            flexBasis="100%"
                                            flexWrap="wrap"
                                            justifyContent="flex-start"
                                            padding={ theme.spacing(1) }
                                            ref={ provided.innerRef }

                                            // sx={ snapshot.isDraggingOver ? { } : {  } }
                                            { ...provided.droppableProps } >
                                            { state.anuncios?.map((anuncio, index) => {
                                                return (
                                                    <Draggable
                                                        key={ anuncio.id }
                                                        draggableId={ anuncio.id }
                                                        index={ index } >
                                                        { (provided) => {
                                                            return (
                                                                <Box
                                                                    ref={ provided.innerRef }
                                                                    // sx={ snapshot.isDragging ? { } : { } }
                                                                    { ...provided.dragHandleProps }
                                                                    { ...provided.draggableProps } >
                                                                    <Anuncio
                                                                        image={ anuncio.image }
                                                                        type="card"
                                                                    />
                                                                </Box>
                                                            );
                                                        } }
                                                    </Draggable>
                                                );
                                            }) }
                                            { provided.placeholder }
                                        </Box>
                                    );
                                } }
                            </Droppable>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 }
                        lg={ 4 }>
                        <Box
                            component={ Paper }
                            display="flex"
                            elevation={ 0 }
                            flexWrap="wrap"
                            padding={ theme.spacing(2) }
                            variant="outlined">
                            <ChevronRightIcon
                                fontSize="small" />
                            <Typography
                                align="left"
                                variant="body2">
                                Minha Playlist
                            </Typography>
                            <Droppable
                                droppableId="playlist"
                                type="playlist">
                                { (provided) => {
                                    return (
                                        <Box
                                            display="flex"
                                            flexBasis="100%"
                                            flexDirection="column"
                                            flexWrap="wrap"
                                            justifyContent="flex-start"
                                            padding={ theme.spacing(1) }
                                            ref={ provided.innerRef }
                                            // sx={ snapshot.isDraggingOver ? { } : {  } }
                                            { ...provided.droppableProps } >
                                            { state.playlist?.map((anuncio, index) => {
                                                return (
                                                    <Draggable
                                                        key={ anuncio.id }
                                                        draggableId={ anuncio.id }
                                                        index={ index } >
                                                        { (provided) => {
                                                            return (
                                                                <Box
                                                                    ref={ provided.innerRef }
                                                                    // sx={ snapshot.isDragging ? { } : { } }
                                                                    { ...provided.dragHandleProps }
                                                                    { ...provided.draggableProps } >
                                                                    <Anuncio
                                                                        created={anuncio.created}
                                                                        id={anuncio.id}
                                                                        image={ anuncio.image }
                                                                        title={ anuncio.title }
                                                                        type="list" />
                                                                </Box>
                                                            );
                                                        } }
                                                    </Draggable>
                                                );
                                            }) }
                                            { provided.placeholder }
                                        </Box>
                                    );
                                } }
                            </Droppable>
                        </Box>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Base >
    );
};