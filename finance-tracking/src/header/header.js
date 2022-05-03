import React from "react";
import Button from "../buttons_description/button";
import logo from "../image/logo.png"

const Header = function() {

    const data_image = {
        src: logo,
        alt: "LOGO"
    }

    return (
        <div className="header">
            <div className="logo_image">
                <img src={data_image.src} alt={data_image.alt} className="logo" />
            </div>
            <Button button={{classButton: "main_button", text: "Войти"}} />
        </div>
    )
}

export default Header