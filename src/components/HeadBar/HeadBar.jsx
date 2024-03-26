import React from 'react';
import DropDown from "@/components/DropDown/DropDown";
import style from  './headBar.module.css';
import {useIntl} from "react-intl";
import Image from "next/image";

function HeadBar({hasDropDown, hasButton, buttonText, title}) {
    const intl = useIntl()
    return (
        <div className={style.board}>
            <h1>{title}</h1>
            <div>{hasDropDown && <DropDown/> }
                {hasButton && (<button><Image src={'/images/icons/plus.svg'} alt={'plus'} width={16} height={16} /> {buttonText}</button>)}</div>
        </div>
    );
}

export default HeadBar;