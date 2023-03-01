import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { createContext, useCallback, useContext, useState } from 'react';

const PopupContext = createContext([]);

export const usePopupContext = () => {
    return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState({});

    const openPopup = useCallback((props) => {
        const newPopup = {
            ...props,
            open: true
        };

        setPopup(newPopup);
    }, []);

    const closePopup = useCallback(() => {
        setPopup({});
    }, []);

    const PopupContainer = ({ title, contentText, contentForm, actions, open = false, onClose }) => {
        return (
            <Dialog
                open={open}
                onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{contentText}</DialogContentText>
                    {contentForm}
                </DialogContent>
                <DialogActions>{actions}</DialogActions>
            </Dialog>
        );
    };

    return (
        <PopupContext.Provider
            value={{
                openPopup,
                closePopup
            }}>
            <PopupContainer {...popup} />
            {children}
        </PopupContext.Provider>
    );
};
