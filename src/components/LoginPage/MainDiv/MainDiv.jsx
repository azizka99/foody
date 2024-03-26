import style from './mainDiv.module.css';
import {FormattedMessage} from "react-intl";
import LoginForm from "@/components/LoginPage/MainDiv/LoginForm";
import LanguageButton from "@/components/LanguageButton/LanguageButton";





function MainDiv(props) {
    return (
        <div className={style.mainDiv}>
            <div className={style.left}>
                <h1><FormattedMessage id={'loginPage_Greeting'}/></h1>

                <div className={style.myForm}>
                    <LoginForm/>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.myImg}>
                </div>
               {/*<LanguageButton/>*/}
            </div>
        </div>
    );
}

export default MainDiv;