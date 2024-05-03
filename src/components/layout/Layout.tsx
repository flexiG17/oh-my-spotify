import React, {ReactNode} from 'react'
import styles from './layout.module.scss'
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({children} : {children: ReactNode}) => {

    return (
        <div className={styles.grid}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout