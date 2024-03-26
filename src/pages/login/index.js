import Head from "next/head";
import {useRouter} from 'next/router'
import style from '@/styles/login.module.css'
import Header from '@/components/LoginPage/Header/Header'
import MainDiv from '@/components/LoginPage/MainDiv/MainDiv'
import {FormattedMessage} from "react-intl";

function Index(props) {

    // const router = useRouter();

    return (
        <>
            <Head>
                <title>Login -- Foody</title>
            </Head>
            {/*<h1 style={{color:"white"}}> <FormattedMessage id={'loginGreeting'}/></h1>*/}

            <Header className={style.header}/>
            <div className={style.myMain}>
                <MainDiv/>
            </div>
        </>
    );
}

export default Index;