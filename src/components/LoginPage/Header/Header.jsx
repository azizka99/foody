import React from 'react';
import Image from "next/image";



function Header({className}) {
    return (
        <div className={className}>
            <img src={'/images/logo.svg'}/>
        </div>
    );
}

export default Header;