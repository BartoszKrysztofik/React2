import { useState, createContext, useContext } from "react";

const CreatingContext = createContext();
 
export const Provider1 = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const switchTheme = () => {
        setDarkTheme(!darkTheme)
    }
    const themeStyle = darkTheme ? {
        backgroundColor: "black",
        color: 'white',
    } : {
        backgroundColor: "white",
        color: "black"
    }
    return (
        <CreatingContext.Provider value={{ switchTheme, darkTheme, themeStyle }}>
            {children}
        </CreatingContext.Provider>
    );
}
export const ThemeButton = () => {

    const { darkTheme, switchTheme, themeStyle } = useContext(CreatingContext);
    console.log("darkTheme:", darkTheme); 
    return (
        <p >
        <button onClick={switchTheme} style={{background: themeStyle.background, color: themeStyle.color}}>
                {darkTheme ? 'White' : 'Black'} </button>
        </p>
    )
}

    