import React from 'react'
import Layout from "../layout/Layout";
import styles from "./mainComponent.module.scss"
import variables from '../../shared/theme/_variables.module.scss'
import InfoComponent from "./info/InfoComponent";
import DescriptionComponent from "./description/DescriptionComponent";
import PlanComponent from "./plan/PlanComponent";
import QuestionsComponent from "./questions/QuestionsComponent";

const MainComponent = () => {

    return (
        <Layout>
            <InfoComponent/>
            <DescriptionComponent/>
            <PlanComponent/>
            <QuestionsComponent/>
        </Layout>
    )
}

export default MainComponent