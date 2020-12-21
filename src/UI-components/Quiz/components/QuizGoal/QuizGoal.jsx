import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {ICON_APPLE, ICON_BITCEPS, ICON_ROCK_HAND} from "../../../../constans/icons";

export default ({setFieldValue, currentGoal, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"40px"}} align="center">
                What's your main goal?
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={ICON_APPLE}
                            isActive={currentGoal==="Lose Weight"}
                            title="Lose Weight"
                            onClick={() => handleConfirm("Lose Weight")}>
                    Get lean and strong
                </CardButton>
                <CardButton type="button"
                            icon={ICON_ROCK_HAND}
                            isActive={currentGoal==="Get fitter"}
                            title="Get fitter"
                            onClick={() => handleConfirm("Get fitter")}>
                    Stay in shape and feel great
                </CardButton>
                <CardButton type="button"
                            icon={ICON_BITCEPS}
                            isActive={currentGoal==="Get strong"}
                            title="Get strong"
                            onClick={() => handleConfirm("Get strong")}>
                    Stay in shape and feel great
                </CardButton>
            </QuestList>
        </div>
    )

}

