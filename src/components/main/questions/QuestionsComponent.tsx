import React, {ReactNode} from 'react'
import styles from './questionComponent.module.scss'
import {Collapse, ConfigProvider} from "antd";
import {QuestionsList} from "./questionsList";
import CalculateButtonComponent from "../../../shared/calculateButton/CalculateButtonComponent";
import variables from "../../../shared/theme/_variables.module.scss";
import {CloseIcon} from "../../../assets/icons";

const QuestionsComponent = () => {
    return (
        <section
            id='faq-section'
            className={styles.grid}>
            <div className={styles.grid_title}>
                <h1>Questions?</h1>
                <h3>We have answers</h3>
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Collapse: {
                            contentPadding: '28px',
                            headerPadding: '18px',
                            colorText: '#fff',
                            colorTextHeading: '#fff',
                            fontSize: 16,
                            fontSizeIcon: 16,
                            colorBorder: variables.borderColor
                        }
                    }
                }}
            >
                <Collapse
                    className={styles.accordion}
                    expandIcon={({ isActive }) =>
                        <CloseIcon style={{transform: !isActive ? 'rotate(45deg)' : 'rotate(0)'}}/>}
                    expandIconPosition={"end"}
                    // ghost={true}
                    items={QuestionsList} bordered={false} defaultActiveKey={['2']}/>
            </ConfigProvider>
        </section>
    )
}

export default QuestionsComponent