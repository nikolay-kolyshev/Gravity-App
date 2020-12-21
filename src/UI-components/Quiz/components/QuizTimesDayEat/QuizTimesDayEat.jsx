import React from 'react'
import {TypographyTitle, TypographyСlassified} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {ICON_APPLE, ICON_BORSCH, ICON_CRUASAN, ICON_EGGS, ICON_SUP} from "../../../../constans/icons";

export default ({setFieldValue, currentValue, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    const emojiArray = [
        ICON_EGGS,
        ICON_CRUASAN,
        ICON_APPLE,
        ICON_BORSCH,
        ICON_SUP
    ]

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"40px"}} align="center">
                How many times a day do you prefer to eat?
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            emojiArray={emojiArray}
                            isActive={currentValue==="Lose Weight"}
                            title="No Preference"
                            onClick={() => handleConfirm("Lose Weight")}>
                    I enjoy everything
                </CardButton>
                <CardButton type="button"
                            emojiArray={emojiArray.slice(0, 3)}
                            isActive={currentValue==="Get fitter"}
                            title="Vegetarian"
                            onClick={() => handleConfirm("Get fitter")}>
                    I avoid meat and fish
                </CardButton>
                <CardButton type="button"
                            emojiArray={emojiArray.slice(0, 2)}
                            isActive={currentValue==="Get strong"}
                            title="Keto (Low Carb)"
                            onClick={() => handleConfirm("Get strong")}>
                    I like low-carb meals for fast metabolism
                </CardButton>
            </QuestList>
        </div>
    )

}

