import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import okHand from '../../../../assets/images/icons/ok_hand_emoji.png'
import broccoli from '../../../../assets/images/icons/Broccoli_emoji.png'
import avacado from '../../../../assets/images/icons/avocado_emoji.png'

export default ({setFieldValue, currentGoal, handlePageNext, currentKey, title}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"60px"}} align="center">
                Choose your diet type
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={okHand}
                            isActive={currentGoal==="Lose Weight"}
                            title="No Preference"
                            onClick={() => handleConfirm("Lose Weight")}>
                    I enjoy everything
                </CardButton>
                <CardButton type="button"
                            icon={broccoli}
                            isActive={currentGoal==="Get fitter"}
                            title="Vegetarian"
                            onClick={() => handleConfirm("Get fitter")}>
                    I avoid meat and fish
                </CardButton>
                <CardButton type="button"
                            icon={avacado}
                            isActive={currentGoal==="Get strong"}
                            title="Keto (Low Carb)"
                            onClick={() => handleConfirm("Get strong")}>
                    I like low-carb meals for fast metabolism
                </CardButton>
            </QuestList>
        </div>
    )

}

