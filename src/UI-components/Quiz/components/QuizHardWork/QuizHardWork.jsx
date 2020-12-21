import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {ICON_BITCEPS, ICON_NERD_FACE, ICON_SMILLING_EVIL} from "../../../../constans/icons";

export default ({setFieldValue, currentValue, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"40px"}} align="center">
                How hard are you prepared to work?
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={ICON_NERD_FACE}
                            isActive={currentValue==="Lose Weight"}
                            title="Newbie"
                            onClick={() => handleConfirm("Lose Weight")}>
                    1-2 workouts / week
                </CardButton>
                <CardButton type="button"
                            icon={ICON_BITCEPS}
                            isActive={currentValue==="Get fitter"}
                            title="Light-mode"
                            onClick={() => handleConfirm("Get fitter")}>
                    2-3 workouts / week
                </CardButton>
                <CardButton type="button"
                            icon={ICON_SMILLING_EVIL}
                            isActive={currentValue==="Get strong"}
                            title="Workout hero"
                            onClick={() => handleConfirm("Get strong")}>
                    3 and more / week
                </CardButton>
            </QuestList>
        </div>
    )

}

