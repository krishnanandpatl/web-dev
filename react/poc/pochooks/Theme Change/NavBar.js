import "./theme.css"
import {useContext} from "react";
import { ThemeContext } from "./ThemeChange";

function NavBar(){
    return (
        <>
        <div>NavBar</div>
        <div>............</div>
        <Options/>
        <Options/>
        <Options/>
        <div>-----------------------</div>
        </>
    )
}
function Options(){
    let cTheme=useContext(ThemeContext);
    return <div className={
        cTheme=="light"?"light":"dark"
    }>Option</div>
}
export default NavBar;