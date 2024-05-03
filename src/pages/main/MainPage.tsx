import React from 'react'
import styles from './mainPage.module.scss'
import MainComponent from "../../components/main/MainComponent";

const MainPage = () => {

    return (
        <body className={styles.grid}>
        {/*<div className={styles.div1}>
                <MainComponent/>
            </div>*/}
        <MainComponent/>
        </body>
    )
}

export default MainPage