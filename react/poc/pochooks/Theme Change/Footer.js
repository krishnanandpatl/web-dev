import "./theme.css"
import {useContext} from 'react';
import { ThemeContext } from "./ThemeChange";

function Footer(){
    return (
    <>
    <div>Footer</div>
    <div>...............</div>
    <FooterText/>
    <div>-----------------------------</div>
    </>
    )
}
function FooterText(){
    let cTheme=useContext(ThemeContext);
    return (
        <div className={
            cTheme=="light"?"light":"dark"
        }>FooterText</div>
    )
}

export default Footer;