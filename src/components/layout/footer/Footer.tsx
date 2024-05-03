import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {

    return (
        <footer className={styles.block}>
            <h2>help@oh-my-spotify.space</h2>
            <div className={styles.links}>
                <p>Legal</p>
                <p>Security and Privacy Center</p>
                <p>Data protection</p>
                <p>Cookie settings</p>
                <p>About ads</p>
                <p>Accessibility</p>
            </div>
        </footer>
    )
}

export default Footer