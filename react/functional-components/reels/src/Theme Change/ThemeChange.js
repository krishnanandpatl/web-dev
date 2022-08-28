import React from "react";
import NavBar from './NavBar';
import Footer from './Footer';
export let ThemeContext= React.createContext("");


function App(){
    let [theme,setTheme]=React.useState("");
    const handleTheme=function(){
        if(theme=="light"){
        setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
    return (
        
        <ThemeContext.Provider value={theme}>
        <button type="button" onClick={handleTheme}>Change Theme</button>
        <NavBar/>
        <Footer/>
        </ThemeContext.Provider>
    )
}

export default App;