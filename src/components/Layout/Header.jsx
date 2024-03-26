import React from 'react';
import Image from "next/image";
import {useIntl} from "react-intl";
import LanguageButton from "@/components/LanguageButton/LanguageButton";

function Header({style}) {
    const intl = useIntl();

    return (
        <div className={style.header}>
            <Image src={'/images/logo.svg'} alt={'logo'} width={92} height={32}/>
            <div>
                <button className={style.addProductBtn}><Image src={'/images/icons/plus.svg'} alt={'plus'} width={9.5} height={9.5} /> {intl.formatMessage({id:'layoutPage_Button_AddProduct'})} </button>
                <div className={style.lanBtn}><Image src={'/images/enLogo.svg'} alt={'en'} width={41} height={41}/> </div>
                <div className={style.profile}>
                    <Image src={'/images/profile.svg'} alt={'profile'} width={58.54} height={41}/>
                    <h4>Admin</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;