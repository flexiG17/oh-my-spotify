import React from 'react'
import styles from './descriptionComponent.module.scss'
import TariffCard from './assets/tariffCard.png'
import {CheckIcon} from "../../../assets/icons";
import PeopleBackground from './assets/peopleBackground.png'

const DescriptionComponent = () => {
    return (
        <section
            id='how-it-works-section'
            className={styles.block}>
            <h1>
                How it works
            </h1>
            <div className={styles.block_grid}>
                <div className={styles.block_horizontal}>
                    <div className={`${styles.container} ${styles.container_dark}`}>
                        <h2 className={styles.container_title}>
                            Choose your subscription type and duration
                        </h2>
                        <div className={styles.tariff}>
                            <img src={TariffCard} alt={'tariff card'} className={styles.tariff_image}/>
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.container_green}`}>
                        <h2 className={styles.container_title} style={{color: '#000'}}>
                            Complete the subscription payment
                        </h2>
                        <div className={styles.check}>
                            <CheckIcon className={styles.check_icon}/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.container_thirdImage}`}>
                    <h2 className={`${styles.container_title} ${styles.third_title}`}>
                        Receive your subscription within 15 minutes.
                    </h2>
                    {/*<div className={styles.human}>
                        <img src={PeopleBackground} alt={'background image'}
                             className={styles.human_image}/>
                    </div>*/}
                </div>
            </div>
        </section>
    )
}

export default DescriptionComponent