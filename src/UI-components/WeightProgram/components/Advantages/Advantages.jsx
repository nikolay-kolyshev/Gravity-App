import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {
    ICON_ADVANTAGES_CHAT,
    ICON_ADVANTAGES_CLOCK,
    ICON_ADVANTAGES_DARTS,
    ICON_ADVANTAGES_HOME,
    ICON_ADVANTAGES_MEDAL, ICON_ADVANTAGES_SALAD
} from "../../../../constans/icons";
import {AdvantagesGrid, AdvantagesStyled} from "./Advantages-styled";
import AdvantageItem from "./AdvantageItem";

export default ({...restProps}) => {

    const advantages = [
        {
            icon: ICON_ADVANTAGES_HOME,
            title: "Занятия дома",
            text: "Нет необходимости идти в тренажерный зал, а для занятий не нужно специальное оборудование"
        },
        {
            icon: ICON_ADVANTAGES_MEDAL,
            title: "Упражнения",
            text: "120 упражнений с инструкциями. Формат видео с озвучкой, чтобы все сделать правильно."
        },
        {
            icon: ICON_ADVANTAGES_DARTS,
            title: "Отчеты и статистика",
            text: "Проверяй прогресс своей цели. Следи за весом, калориями и шагами."
        },
        {
            icon: ICON_ADVANTAGES_CLOCK,
            title: "Не нужно вести счет",
            text: "Приложение считает количество повторов за вас, как это сделал бы настоящий тренер"
        },
        {
            icon: ICON_ADVANTAGES_CHAT,
            title: "Coaches in chat",
            text: "A certified trainer will answer your questions 24/7."
        },
        {
            icon: ICON_ADVANTAGES_SALAD,
            title: "Easy-to-follow meal plans",
            text: "Well-balanced and sensible meal recomendation compiled based on your needs."
        }
    ]

    const advantagesElements = advantages.map(
        lesson =>
            <AdvantageItem
                icon={lesson.icon}
                title={lesson.title}
                text={lesson.text}
            />
    )

    return (

        <AdvantagesStyled {...restProps}>
            <Typography size="24px" weight={500} style={{marginBottom: "45px"}}>
                Адаптация упражнений под тебя
            </Typography>
            <AdvantagesGrid>
                {advantagesElements}
            </AdvantagesGrid>
        </AdvantagesStyled>

    )


}