import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import apple from '../../../../assets/images/icons/apple.png'
import rockHand from '../../../../assets/images/icons/Rock_empji.png'
import strnger from '../../../../assets/images/icons/Get_stronger.png'

export default ({setFieldValue, currentGoal, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"60px"}}>
                What's your main goal?
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={apple}
                            isActive={currentGoal==="Lose Weight"}
                            title="Lose Weight"
                            onClick={() => handleConfirm("Lose Weight")}>
                    Get lean and strong
                </CardButton>
                <CardButton type="button"
                            icon={rockHand}
                            isActive={currentGoal==="Get fitter"}
                            title="Get fitter"
                            onClick={() => handleConfirm("Get fitter")}>
                    Stay in shape and feel great
                </CardButton>
                <CardButton type="button"
                            icon={strnger}
                            isActive={currentGoal==="Get strong"}
                            title="Get strong"
                            onClick={() => handleConfirm("Get strong")}>
                    Stay in shape and feel great
                </CardButton>
            </QuestList>
        </div>
    )

}

