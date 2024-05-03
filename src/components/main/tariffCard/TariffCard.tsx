import React from 'react'
import styles from './TariffCard.module.scss'
import SpotifyLogo from '../../../shared/assets/spotify_logo.svg'
import variables from '../../../shared/theme/_variables.module.scss'


export type TariffCardType = {
    id: number,
    name: string
    color: string
    features: string[]
    price: number
}

interface TariffCardProps extends TariffCardType {
    selectedCard: TariffCardType,
    setSelectedCard: React.Dispatch<TariffCardType>
}

export const TariffCard = (props?: TariffCardProps) => {
    const isCardSelected = props?.selectedCard.id !== props?.id

    return (
        <div
            className={`${styles.tariffCard} ${!isCardSelected ? styles.selected : ''}`}
        >
            <div className={styles.spotifyLogo}>
                <img src={SpotifyLogo} alt="spotify-logo"></img>
                <p>Premium</p>
            </div>
            <div className={styles.tariffOverview}>
                <h2 style={{color: props?.color}}>{props?.name}</h2>
                <p>${props?.price}/month</p>
            </div>
            <hr/>
            <div className={styles.features}>
                <ul>
                    {props?.features.map(element => {
                        return (<li>
                            {element}
                        </li>)
                    })}
                </ul>
            </div>
            <div className={styles.actions}>
                <button
                    onClick={() => {props?.setSelectedCard(props)}}
                    style={{backgroundColor: props?.color}}>
                    <h4>Get {props?.name} premium</h4>
                </button>
                <p>For up to 6 members of a family residing at the same address. <a href="">Offer subject to
                    condition</a></p>
            </div>
        </div>
    )
}