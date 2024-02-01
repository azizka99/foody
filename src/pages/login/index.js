import Head from "next/head";
import {useRouter} from 'next/navigation'
import style from '../../styles/login.module.css'
import Header from '../../components/LoginPage/Header/Header'
function Index(props) {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Login -- Foody</title>
            </Head>
            <h1 style={{color:"white"}}>Name of the site:{router.locale}</h1>
            <Header className={style.header}/>
        </>
    );
}

export default Index;