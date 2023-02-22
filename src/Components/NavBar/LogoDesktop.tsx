import React from 'react';
import logo from "../../resources/logo.png";

function LogoMobile() {
    return (
        <img className="hidden h-8 w-auto lg:block"
             src={logo}
             alt="Your Company" />
    );
}

export default LogoMobile;