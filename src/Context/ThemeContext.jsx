import { useState,createContext, useContext } from "react";


const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [contextTheme, setContextTheme] = useState("Light")
    const value = {contextTheme, setContextTheme}
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = ()=>{
    const context = useContext(ThemeContext)
    return context
}