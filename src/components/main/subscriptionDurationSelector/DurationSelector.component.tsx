import styles from "./durationCard.module.scss";
import React, {useState} from "react";

export type DurationState = {
    durationMonths: number | null;
    setDuration: React.Dispatch<React.SetStateAction<number | null>>
}

export const DurationSelectorComponent = (props: DurationState) => {

    return (
        <div className={styles.flex}>
            <div className={styles.card + ' ' + (props.durationMonths === 1 ? styles.selected : '')} onClick={() => {props.setDuration(1)}}><h4>1 month</h4></div>
            <div className={styles.card + ' ' + (props.durationMonths === 3 ? styles.selected : '')} onClick={() => {props.setDuration(3)}}><h4>3 months</h4></div>
            <div className={styles.card + ' ' + (props.durationMonths === 6 ? styles.selected : '')} onClick={() => {props.setDuration(6)}}><h4>6 months</h4></div>
        </div>
    )
}