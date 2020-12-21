import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {ICON_RABBIT, ICON_SLOTH, ICON_TIGER} from "../../../../constans/icons";

export default ({setFieldValue, currentValue, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"40px"}} align="center">
                Какой твой уровень активности?
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={ICON_SLOTH}
                            isActive={currentValue==="Lose Weight"}
                            title="Не активный"
                            onClick={() => handleConfirm("Lose Weight")}>
                    Большую часть дня провожу сидя
                </CardButton>
                <CardButton type="button"
                            icon={ICON_RABBIT}
                            isActive={currentValue==="Get fitter"}
                            title="Get fitter"
                            onClick={() => handleConfirm("Get fitter")}>
                    Прогуливаюсь несколько раз в день
                </CardButton>
                <CardButton type="button"
                            icon={ICON_TIGER}
                            isActive={currentValue==="Get strong"}
                            title="Get strong"
                            onClick={() => handleConfirm("Get strong")}>
                    Тренируюсь несколько раз в неделю
                </CardButton>
            </QuestList>
        </div>
    )

}

