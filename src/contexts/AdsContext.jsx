import { createContext, useContext, useState } from 'react';
import { anuncios as an, order as or, playlists as pl } from '../data';

const AdsContext = createContext({});

export function useAdsContext() {
    return useContext(AdsContext);
}

export function AdsProvider({ children }) {

    const [state, setState] = useState({
        anuncios: an,
        playlists: pl,
        order: or
    });

    function onEditPlaylist(editPlaylist) {
        const index = state.order.findIndex(
            (playlist) => playlist == editPlaylist
        );
        const newOrder = Array.from(state.order);
        const [removed] = newOrder.splice(index, 1);
        newOrder.splice(1, 0, removed);

        const newState = {
            ...state,
            order: newOrder
        };

        setState(newState);
    }

    function onDragEnd(result) {
        const { destination, source, draggableId } = result;


        if (!destination) { return; }

        if (destination.droppableId == source.droppableId &&
            destination.index == source.index) {
            return;
        }

        const start = state.playlists[source.droppableId];
        const finish = state.playlists[destination.droppableId];

        if (start == finish) {
            const newAnuncios = Array.from(start.anuncios);
            newAnuncios.splice(source.index, 1);
            newAnuncios.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...finish,
                anuncios: newAnuncios
            };

            const newState = {
                ...state,

                playlists: {
                    ...state.playlists,
                    [newColumn.id]: newColumn
                }
            };

            setState(newState);
            return;
        }

        // moving from one list to another
        const startAnuncios = Array.from(start.anuncios);
        startAnuncios.splice(source.index, 1);
        const newStart = {
            ...start,
            anuncios: startAnuncios
        };

        const finishAnuncios = Array.from(finish.anuncios);
        finishAnuncios.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            anuncios: finishAnuncios
        };

        const newState = {
            ...state,
            playlists: {
                ...state.playlists,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        };

        setState(newState);
    }

    // envolver o objeto data em um useMemo?

    return (
        <AdsContext.Provider
            value={{
                anuncios: state.anuncios,
                order: state.order,
                playlists: state.playlists,
                onDragEnd,
                onEditPlaylist
            }}>
            {children}
        </AdsContext.Provider>
    );
}
