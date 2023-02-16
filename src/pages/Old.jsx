const reducer = (state, action) => {
    switch (action.type) {
    case 'MOVE': {
        //
    }
    }
};

export const PlayList = () => {
    const [ state, dispatch ] = useReducer(reducer, { anuncios, playlists });

    const onDragEnd = useCallback((result) => {
        if (result.reason == 'DROP') {
            if (!result.destination) {
                return;
            }
            dispatch({
                type: 'MOVE',
                item: result.draggableId,
                from_list: result.source.droppableId,
                to_list: result.destination.droppableId,
                from_index: result.source.index,
                to_index: result.destination.index,
            });
        }
    }, []);

    return (
        <Droppable
            droppableId='anuncios'
            type='criador-playlists'>
            {(provided) => {
                return (
                    <Box
                        display='flex'
                        flexBasis='100%'
                        flexWrap='wrap'
                        justifyContent='flex-start'
                        padding={theme.spacing(1)}
                        ref={provided.innerRef}
                        // sx={ snapshot.isDraggingOver ? { } : {  } }
                        {...provided.droppableProps}>
                        {Object.values(state.anuncios)?.map((anuncio, index) => {
                            return (
                                <Draggable
                                    key={anuncio.id}
                                    draggableId={anuncio.id}
                                    index={index}>
                                    {(provided) => {
                                        return (
                                            <Box
                                                ref={provided.innerRef}
                                                // sx={ snapshot.isDragging ? { } : { } }
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}>
                                                <Anuncio
                                                    image={anuncio.image}
                                                    type='card'
                                                />
                                            </Box>
                                        );
                                    }}
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </Box>
                );
            }}
        </Droppable>
    );
};