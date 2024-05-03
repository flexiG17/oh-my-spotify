import React from 'react'
import styles from './calculateButtonComponent.module.scss'
import {ArrowIcon} from "../../assets/icons";

type ButtonProps = {
    type?: 'green' | 'dark',
    isCalculate?: boolean,
    width?: string,
    text?: string
}

const CalculateButtonComponent = ({type = 'dark', width, text, isCalculate=true}: ButtonProps) => {
    const buttonColor = type === 'dark' ? styles.button_dark : styles.button_green
    const textColor = type === 'dark' ? '#fff' : '#000'

    const scrollToPlan = () => {
        const element = document.getElementById('plan-section')
        element?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <button
            style={{width}}
            className={`${styles.button} ${buttonColor}`}
            onClick={isCalculate ? scrollToPlan: () => {}}
        >
            <p style={{color: textColor}}>
                {text ? text : 'Calculate'}
            </p>
            <ArrowIcon fill={textColor}/>
        </button>
    )
}

export default CalculateButtonComponent