import { HomeOutlined as HomeIcon, SmartDisplayOutlined as SmartDisplayIcon, SettingsOutlined as SettingsIcon, SubscriptionsOutlined as SubscriptionsIcon } from "@mui/icons-material";
import { useMenuContext } from "contexts";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    const { handleOptionsMenu } = useMenuContext();

    useEffect(() => {
        handleOptionsMenu([
            {
                id: 1,
                icon: <HomeIcon />,
                label: "Home",
                path: "/home"
            },
            {
                id: 2,
                icon: <SmartDisplayIcon />,
                label: "Criador",
                path: "/criador"
            },
            {
                id: 3,
                icon: <SubscriptionsIcon />,
                label: "Grade",
                path: "/grade"
            },
            {
                id: 4,
                icon: <SettingsIcon />,
                label: "Configurações",
                path: "/configuracoes"
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route
                path="/home"
                element={<h1>Home</h1>} />
            <Route
                path="/criador"
                element={<h1>Criador</h1>} />
            <Route
                path="/grade"
                element={<h1>Grade</h1>} />
            <Route
                path="/configuracoes"
                element={<h1>Configurações</h1>} />
            <Route
                path="*"
                element={<Navigate
                    to="/home" />} />
        </Routes>
    );
};