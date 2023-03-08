import { createContext, useContext, useEffect, useState } from 'react';
import { playlistService } from 'services';

const AdsContext = createContext({});

export function useAdsContext() {
    return useContext(AdsContext);
}

export function AdsProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [playlists, setPlaylists] = useState();
    const [anuncios, setAnuncios] = useState();
    const [order, setOrder] = useState();

    useEffect(() => {
        setLoading(true);
        playlistService.getAll('playlists').then((result) => {
            setPlaylists(result.data);
        });

        playlistService.getAll('order').then((result) => {
            setOrder(result.data);
        });

        playlistService.getAll('anuncios').then((result) => {
            setLoading(false);
            setAnuncios(result.data);
        });
    }, []);

    function onDragEnd({ destination, source, draggableId }) {
        setSaving(true);

        if (!destination) {
            return;
        }

        if (destination.droppableId == source.droppableId && destination.index == source.index) {
            return;
        }

        const start = playlists[source.droppableId];
        const finish = playlists[destination.droppableId];

        if (start == finish) {
            const startAnuncios = Array.from(start.ads);
            startAnuncios.splice(source.index, 1);
            startAnuncios.splice(destination.index, 0, Number(draggableId));

            const newStart = {
                ...start,
                ads: startAnuncios
            };

            const newPlaylists = Array.from(playlists);
            const sourceIndex = newPlaylists.findIndex((playlist) => playlist.id == source.droppableId);
            newPlaylists.splice(sourceIndex, 1, newStart);

            setPlaylists(newPlaylists);

            playlistService.updateById('playlists', sourceIndex, newStart).then((result) => {
                setSaving(false);
                if (result instanceof Error) {
                    console.log(result.message);
                }
            });
            return;
        }

        const startAnuncios = Array.from(start.ads);
        startAnuncios.splice(source.index, 1);

        const newStart = {
            ...start,
            ads: startAnuncios
        };

        const finishAnuncios = Array.from(finish.ads);
        finishAnuncios.splice(destination.index, 0, Number(draggableId));

        const newFinish = {
            ...finish,
            ads: finishAnuncios
        };

        const newPlaylists = Array.from(playlists);
        const sourceIndex = newPlaylists.findIndex((playlist) => playlist.id == source.droppableId);
        const destinationIndex = newPlaylists.findIndex((playlist) => playlist.id == destination.droppableId);
        newPlaylists.splice(sourceIndex, 1, newStart);
        newPlaylists.splice(destinationIndex, 1, newFinish);

        setPlaylists(newPlaylists);

        playlistService.updateById('playlists', sourceIndex, newStart).then((result) => {
            if (result instanceof Error) {
                console.log(result.message);
            }
        });
        playlistService.updateById('playlists', destinationIndex, newFinish).then((result) => {
            setSaving(false);
            if (result instanceof Error) {
                console.log(result.message);
            }
        });
    }

    function onEditPlaylist(editPlaylist) {
        setSaving(true);
        const startOrder = order[0];
        const newOrderPlaylists = Array.from(startOrder.playlists);
        const playlistIndex = startOrder.playlists.findIndex((playlist) => playlist == editPlaylist);
        const [removedPlaylist] = newOrderPlaylists.splice(playlistIndex, 1);
        newOrderPlaylists.splice(1, 0, removedPlaylist);

        const newStartOrder = {
            ...startOrder,
            playlists: newOrderPlaylists
        };

        setOrder([newStartOrder]);

        playlistService.updateById('order', 0, newStartOrder).then((result) => {
            setSaving(false);
            if (result instanceof Error) {
                console.log(result.message);
            }
        });

        // function onEditPlaylist(playlistToMove) {
        //     const startOrder = order[0];
        //     const updatedPlaylists = [...startOrder.playlists];
        //     const playlistIndex = startOrder.playlists.findIndex((playlist) => playlist == playlistToMove);
        //     updatedPlaylists.move(playlistIndex, 1);

        //     const newStartOrder = {
        //         ...startOrder,
        //         playlists: updatedPlaylists
        //     };

        //     setOrder([newStartOrder]);
    }

    // function onCreatePlaylist() {
    //     const ads = [];
    //     const color = colorGenerator();
    //     const title = 'data.title';
    //     const playlist = { title, color, ads };

    //     playlistService.create(playlist).then((result) => {
    //         if (result instanceof Error) {
    //             // handlePopupErrorSave();
    //         } else {
    //             // handlePopupOkSave();
    //         }
    //     });
    // }

    // function onLoadPlaylist() {
    //     playlistService.getAll().then((result) => {
    //         if (result instanceof Error) {
    //             // console.log(result.message);
    //         } else {
    //             // setTotalRecords(result.total);
    //             // setRecords(result.data);
    //             // console.log(result.data);
    //             setPl1(result.data);
    //         }
    //     });
    // }

    // function onCreatePlaylist() {
    // const newPlaylists = { ...playlists };
    // const newOrder = Array.from(order);
    // newPlaylists[id] = playlist;
    // newOrder.push(id);
    // const newState = {
    //     ...state,
    //     playlists: newPlaylists,
    //     order: newOrder
    // };
    // setState(newState);
    // }

    return (
        <AdsContext.Provider
            value={{
                anuncios,
                order,
                playlists,
                loading,
                saving,
                onDragEnd,
                onEditPlaylist
            }}>
            {children}
        </AdsContext.Provider>
    );
}
