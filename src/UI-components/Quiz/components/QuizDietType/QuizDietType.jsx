import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {ICON_AVACADO, ICON_BROCCOLI, ICON_OK_HAND} from "../../../../constans/icons";

export default ({setFieldValue, currentValue, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"40px"}} align="center">
                Choose your diet type
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={ICON_OK_HAND}
                            isActive={currentValue==="Lose Weight"}
                            title="No Preference"
                            onClick={() => handleConfirm("Lose Weight")}>
                    I enjoy everything
                </CardButton>
                <CardButton type="button"
                            icon={ICON_BROCCOLI}
                            isActive={currentValue==="Get fitter"}
                            title="Vegetarian"
                            onClick={() => handleConfirm("Get fitter")}>
                    I avoid meat and fish
                </CardButton>
                <CardButton type="button"
                            icon={ICON_AVACADO}
                            isActive={currentValue==="Get strong"}
                            title="Keto (Low Carb)"
                            onClick={() => handleConfirm("Get strong")}>
                    I like low-carb meals for fast metabolism
                </CardButton>
            </QuestList>
        </div>
    )

}

