"use client"

import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
}

// custom hook
const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider}