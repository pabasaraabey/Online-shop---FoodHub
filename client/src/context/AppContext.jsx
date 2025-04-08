import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isseller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);

    const value = { navigate, user, setUser, setIsSeller, isseller,showUserLogin,setShowUserLogin };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
