import React, {useState} from 'react'
import styles from './PlanComponent.module.scss'
import {TariffCard, TariffCardType} from "../tariffCard/TariffCard";
import variables from "../../../shared/theme/_variables.module.scss";
import CalculateButtonComponent from "../../../shared/calculateButton/CalculateButtonComponent";
import {DurationSelectorComponent} from "../subscriptionDurationSelector/DurationSelector.component";


const PlanResults = (props: {selectedCard: TariffCardType, durationMonths: number | null}) => {

    const dayDifference = (props.durationMonths || 1) * 30;
    const discount = (props.durationMonths || 1) > 1 ? 0.87 : 1;

    const totalPrice = (props.durationMonths || 1) * props.selectedCard.price * discount;

    return <div className={styles.plan_result}>
        <div className={styles.plan_result_row}>
            <p className={styles.plan_result_row_name}>
                Plan
            </p>
            <p className={styles.plan_result_row_value}>
                {props.selectedCard.name}
            </p>
        </div>
        <div className={styles.plan_result_row}>
            <p className={styles.plan_result_row_name}>
                Duration
            </p>
            <p className={styles.plan_result_row_value}>
                {dayDifference} days
            </p>
        </div>
        <div className={styles.plan_result_row}>
            <p className={styles.plan_result_row_name}>
                Price
            </p>
            <h2>
                ${totalPrice}
            </h2>
        </div>
        <div className={styles.plan_result_button_position}>
            <CalculateButtonComponent isCalculate={false} text={'Purchase'} width='100%' type={'green'}/>
        </div>
    </div>
}

const PlanComponent = () => {
    const tariffCards: TariffCardType[] = [
        {
            id: 1,
            color: variables.roseColor,
            price: 3,
            features: ['1 Spotify Premium account', 'Cancel anytime'],
            name: "Individual"
        },
        {
            id: 2,
            color: "#FFC862",
            price: 5,
            features: ['1 Spotify Premium account', 'Cancel anytime'],
            name: "Duo"
        },
        {
            id: 3,
            color: variables.blueColor,
            price: 6,
            features: ['1 Spotify Premium account', 'Cancel anytime'],
            name: "Family"
        },
    ]
    const [selectedCard, setSelectedCard] = useState<TariffCardType>(tariffCards[0])
    const [durationMonths, setDuration] = useState<number | null>(1);


    const PlanSteps = [
        {
            number: 1,
            title: 'Select plan',
            body:
                <div className={styles.cards_grid}>
                    {tariffCards.map(tariffCard => {
                        return <TariffCard
                            {...tariffCard}
                            selectedCard={selectedCard!}
                            setSelectedCard={setSelectedCard}/>
                    })}
                </div>
        },
        {
            number: 2,
            title: 'Choose subscription period',
            body: <DurationSelectorComponent setDuration={setDuration} durationMonths={durationMonths} />
        },
        {
            number: 3,
            title: 'Checkout',
            body: <PlanResults selectedCard={selectedCard} durationMonths={durationMonths} />
        },
    ]

    return (
        <section
            id={'plan-section'}
            className={styles.grid}>
            <h1>
                Get ur plan
            </h1>
            {PlanSteps.map(({number, title, body}) => {
                return <div className={styles.step}>
                    <div className={styles.step_title}>
                        <div className={styles.step_title_count}>
                            <h3>{number}</h3>
                        </div>
                        <h2>{title}</h2>
                    </div>
                    {body}
                </div>
            })}
        </section>
    )
}

export default PlanComponent