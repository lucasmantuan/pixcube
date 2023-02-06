import { createContext, useCallback, useContext, useState } from "react";

const MenuContext = createContext({});

export const useMenuContext = () => {
    return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ optionsMenu, setOptionsMenu ] = useState([]);
    const [ titleBar, setTitleBar ] = useState("");

    const handleOpenMenu = useCallback(() => {
        setOpenMenu((value) => !value);
    }, []);

    const handleOptionsMenu = useCallback((value) => {
        setOptionsMenu(value);
    }, []);

    const handleTitleBar = useCallback((value) => {
        setTitleBar(value);
    }, []);

    return (
        <MenuContext.Provider
            value={ {
                openMenu,
                handleOpenMenu,
                optionsMenu,
                handleOptionsMenu,
                titleBar,
                handleTitleBar
            } }>
            { children }
        </MenuContext.Provider>
    );
};
