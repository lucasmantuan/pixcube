import { Home as HomeIcon, Settings as SettingsIcon, SmartDisplay as CreatorIcon, ViewList as ListIcon } from '@mui/icons-material';
import { useMenuContext } from 'contexts';
import { PlaylistCreator } from 'pages';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
    const { handleOptionsMenu } = useMenuContext();

    useEffect(() => {
        handleOptionsMenu([
            {
                id: 1,
                icon: <HomeIcon />,
                label: 'Home',
                path: '/home'
            },
            {
                id: 2,
                icon: <CreatorIcon />,
                label: 'Criador',
                path: '/criador'
            },
            {
                id: 3,
                icon: <ListIcon />,
                label: 'Grade',
                path: '/grade'
            },
            {
                id: 4,
                icon: <SettingsIcon />,
                label: 'Configurações',
                path: '/configuracoes'
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route
                path='/home'
                element={<h1>Home</h1>}
            />
            <Route
                path='/criador'
                element={<h1>Criador</h1>}
            />
            <Route
                path='/grade'
                element={<PlaylistCreator />}
            />
            <Route
                path='/configuracoes'
                element={<h1>Configurações</h1>}
            />
            <Route
                path='*'
                element={<Navigate to='/home' />}
            />
        </Routes>
    );
};
