import Head from "next/head";
import style from './style.module.css'
import Header from "@/components/Layout/Header";
import Menu from "@/components/Layout/LeftSide/Menu";

function Layout({title, children}) {
    return (
        <div className={style.page}>
            <Head>
                <title>{title}</title>
            </Head>
            <Header style={style}/>
            <main className={style.main}>
                <Menu style={style.left} />
                <div className={style.right}>{children}</div>
            </main>
        </div>
    );
}

export default Layout;