import React, {useState} from 'react'
import styles from './header.module.scss'
import CalculateButtonComponent from "../../../shared/calculateButton/CalculateButtonComponent";
import {CloseIcon, MenuIcon} from "../../../assets/icons";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(prevState => !prevState)

    const scrollToFaq = () => {
        toggleMenu()
        const element = document.getElementById('faq-section')
        element?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const scrollToHowItWorks = () => {
        toggleMenu()
        const element = document.getElementById('how-it-works-section')
        element?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <header>
            <div>
                <div className={styles.box}>
                    <div className={styles.logo}>
                        <h4>
                            Spotify
                        </h4>
                    </div>
                    <div
                        className={
                            showMenu ? `${styles.menu} ${styles.active}` : `${styles.menu}`
                        }>
                        <ul>
                            <li>
                                <p onClick={scrollToHowItWorks}>How</p>
                            </li>
                            <li>
                                <p onClick={scrollToFaq}>FAQ</p>
                            </li>
                        </ul>
                        <div className={styles.button_mobile_position}>
                            <p className={styles.more_info}>
                                help@oh-my-spotify.space
                            </p>
                            <div
                                onClick={toggleMenu}
                            >
                                <CalculateButtonComponent width={'100%'}/>
                            </div>
                        </div>
                    </div>
                    <div onClick={toggleMenu} className={styles.mobile_btn}>
                        {showMenu
                            ?
                            <CloseIcon color={'#fff'} width={25} height={25}/>
                            :
                            <MenuIcon color={'#fff'} width={25} height={25}/>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header