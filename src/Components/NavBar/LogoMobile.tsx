import React from 'react';
import logo from "../../resources/logo.png";

function LogoMobile() {
    return (
        <img className="block h-8 w-auto lg:hidden"
             src={logo}
             alt="Your Company" />
    );
}

export default LogoMobile;