import React from 'react'
import styles from './infoComponent.module.scss'
import BackgroundImage from './assets/backgroundImage.png'
import CalculateButtonComponent from "../../../shared/calculateButton/CalculateButtonComponent";

const InfoComponent = () => {
    return (
        <section className={styles.block}>
            <div className={styles.grid}>
                <h1 className={styles.block_title}>
                    Save on Music: Spotify for $3 per Month for American Users
                </h1>
                <p className={styles.block_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada vel felis a dapibus. Duis tempus tellus sit amet tellus volutpat interdum. Etiam egestas, justo et tempus egestas.
                </p>
                <CalculateButtonComponent type={'green'}/>
            </div>
            <img src={BackgroundImage} alt={'background image'} className={styles.image}/>
        </section>
    )
}

export default InfoComponent