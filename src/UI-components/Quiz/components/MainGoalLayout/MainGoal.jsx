import React from 'react'
import logo from "../../../../assets/images/logo.svg"
import Logo from "../../../common/Logo/Logo";
import Header from "../../../Header/Header";
import BackIcon from "../../../../assets/images/other/back_landing.png"
import {TypographyHGroup, TypographySupTitle, TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {CardButtonGender} from "../../../common/Cards/Cards";
import {CardButtonStyled, IconStyled} from "../../../common/Cards/Cards-styled";
import apple from '../../../../assets/images/icons/apple.png'
import rockHand from '../../../../assets/images/icons/Rock_empji.png'
import strnger from '../../../../assets/images/icons/Get_stronger.png'
import {QuestList,CardButton} from '../../../common/Cards/Cards'
import {QuizWrapperStyled} from "../../QuizWrapperStyled";
import {Button} from "../../../common/Buttons/Button";
const array=[
    apple,
    apple,
    apple,
    apple,
    apple,
    apple,
    apple,
    apple,
    apple,
    apple,
    apple,
    apple
    ]
export default ({setFieldValue, currentGoal, fieldsComponentsState, setFieldsComponentsState, nextKey,previousKey}) => {

    const handleMainGoal = value => {
        setFieldValue("goal", value)
        setFieldsComponentsState({
            ...fieldsComponentsState,
            "goalLayout": false,
            [nextKey]: true
        })
    }
    const pageBack = () =>{
        setFieldsComponentsState({
            ...fieldsComponentsState,
            "motivationLayout": false,
            [previousKey]: true
        })
    }
    return (
        <div>
            <div type="button" onClick={() => pageBack()}>
                <IconStyled icon={BackIcon} style={{maxWidth:"24px",maxHeight:"24px"}}/>
            </div>
            <QuizWrapperStyled>
                <TypographyTitle style={{marginTop:"20px",marginBottom:"60px"}}>
                    What's your main goal?
                </TypographyTitle>
                <QuestList>
                    <CardButton type="button"
                                icon={apple}
                                isActive={currentGoal==="Lose Weight"}
                                title="Lose Weight"
                                onClick={() => handleMainGoal("Lose Weight")}>
                        Get lean and strong
                    </CardButton>
                    <CardButton type="button"
                                icon={rockHand}
                                isActive={currentGoal==="Get fitter"}
                                title="Get fitter"
                                onClick={() => handleMainGoal("Get fitter")}>
                        Stay in shape and feel great
                    </CardButton>
                    <CardButton type="button"
                                icon={strnger}
                                isActive={currentGoal==="Get strong"}
                                title="Get strong"
                                onClick={() => handleMainGoal("Get strong")}>
                        Stay in shape and feel great
                    </CardButton>
                </QuestList>
            </QuizWrapperStyled>
        </div>

    )

}

