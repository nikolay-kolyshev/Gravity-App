import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {PleasantTriflesStyled, TriflesGrid} from "./PleasantTrifles-styled";
import {ICON_TRIFLES_APPLE_HEALTH, ICON_TRIFLES_CLOCK, ICON_TRIFLES_DOWNLOAD} from "../../../../constans/icons";
import TrifleItem from "./TrifleItem";

export default ({...restProps}) => {

    const trifles = [
        {
            icon: ICON_TRIFLES_DOWNLOAD,
            title: "Offline mode",
            text: "No internet connection? No problem. Just download the workout and exercise offline."
        },
        {
            icon: ICON_TRIFLES_CLOCK,
            title: "Apple Watch",
            text: "You can fully control your workout right from your wrist. No need to check your phone."
        },
        {
            icon: ICON_TRIFLES_APPLE_HEALTH,
            title: "Sync with Apple Health",
            text: "Чтобы данные о тренировках и активности не пропали, мы синхронизируем их с Apple Health."
        }
    ]

    const triflesElements = trifles.map(
        lesson =>
            <TrifleItem
                icon={lesson.icon}
                title={lesson.title}
                text={lesson.text}
            />
    )

    return (

        <PleasantTriflesStyled {...restProps}>
            <Typography size="24px" weight={500} style={{marginBottom: "45px"}}>
                Адаптация упражнений под тебя
            </Typography>
            <TriflesGrid>
                {triflesElements}
            </TriflesGrid>
        </PleasantTriflesStyled>

    )


}