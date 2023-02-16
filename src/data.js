export const anuncios = {
    'ad1': {
        id: 'ad1',
        title: 'Primeiro Anúncio',
        created: '20-02-2022',
        thumb: 'anuncios/001.jpg'
    },
    'ad2': {
        id: 'ad2',
        title: 'Segundo Anúncio',
        created: '20-02-2022',
        thumb: 'anuncios/002.jpg'
    },
    'ad3': {
        id: 'ad3',
        title: 'Terceiro Anúncio',
        created: '20-02-2022',
        thumb: 'anuncios/003.jpg'
    },
    'ad4': {
        id: 'ad4',
        title: 'Quarto Anúncio',
        created: '20-02-2022',
        thumb: 'anuncios/001.jpg'
    },
    'ad5': {
        id: 'ad5',
        title: 'Quinto Anúncio',
        created: '20-02-2022',
        thumb: 'anuncios/002.jpg'
    },
    'ad6': {
        id: 'ad6',
        title: 'Sexto Anúncio',
        created: '20-02-2022',
        thumb: 'anuncios/003.jpg'
    }
};

export const playlists = {
    all: {
        id: 'all',
        title: 'Todos os Anúncios',
        color: '',
        anuncios: ['ad1', 'ad2',],
    },
    'pl1': {
        id: 'pl1',
        title: 'Primeira Playlist',
        color: 'primary',
        anuncios: ['ad3', 'ad4', 'ad6'],
    },
    'pl2': {
        id: 'pl2',
        title: 'Segunda Playlist',
        color: 'secondary',
        anuncios: [],
    },
    'pl3': {
        id: 'pl3',
        title: 'Terceira Playlist',
        color: 'error',
        anuncios: ['ad5'],
    },
    'pl4': {
        id: 'pl4',
        title: 'Terceira Playlist',
        color: 'warning',
        anuncios: [],
    }
};

export const order = ['all', 'pl1', 'pl2', 'pl3', 'pl4'];