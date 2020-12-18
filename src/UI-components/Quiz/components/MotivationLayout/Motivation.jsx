import React from 'react'
import SuperGirl from '../../../../assets/images/icons/superGirl.png'
import Tango from '../../../../assets/images/icons/Tango.png'
import Devil from '../../../../assets/images/icons/Devil.png'
import Health from '../../../../assets/images/icons/Health.png'
import {TypographyHGroup, TypographySupTitle, TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {CardButtonGender} from "../../../common/Cards/Cards";
import {CardButtonStyled} from "../../../common/Cards/Cards-styled";
import apple from '../../../../assets/images/icons/apple.png'
import {QuestList,CardButton} from '../../../common/Cards/Cards'
import {IconStyled} from "../../../common/Cards/Cards-styled";
import BackIcon from "../../../../assets/images/other/back_landing.png";
import {QuizWrapperStyled} from "../../QuizWrapperStyled";
import rockHand from "../../../../assets/images/icons/Rock_empji.png";
import strnger from "../../../../assets/images/icons/Get_stronger.png";
export default ({setFieldValue, currentMotivation, fieldsComponentsState, setFieldsComponentsState, nextKey,previousKey}) => {

    const handleMainGoal = value => {
        setFieldValue("motivation", value)
        setFieldsComponentsState({
            ...fieldsComponentsState,
            "motivationLayout": false,
            [nextKey]: true
        })
    }
    const pageBack = value =>{
        setFieldValue("Motivation", value)
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
                <TypographyTitle style={{marginTop:"20px",marginBottom:"60px",textAlign:"center"}}>
                    What motivates you the most
                </TypographyTitle>
                <QuestList>
                    <CardButton type="button"
                                icon={SuperGirl}
                                isActive={currentMotivation==="Feeling Confident"}
                                title="Feeling Confident"
                                onClick={() => handleMainGoal("Feeling Confident")}>
                        I want to look and feel my best
                    </CardButton>
                    <CardButton type="button"
                                icon={Tango}
                                isActive={currentMotivation==="Looking Amazing"}
                                title="Looking Amazing"
                                onClick={() => handleMainGoal("Looking Amazing")}>
                        I want to turn heads at an event
                    </CardButton>
                    <CardButton type="button"
                                icon={Devil}
                                isActive={currentMotivation==="Getting Revenge"}
                                title="Getting Revenge"
                                onClick={() => handleMainGoal("Getting Revenge")}>
                        I want my ex to regret losing me
                    </CardButton>
                    <CardButton type="button"
                                icon={Health}
                                isActive={currentMotivation==="Improving Health"}
                                title="Improving Health"
                                onClick={() => handleMainGoal("Improving Health")}>
                        I want to prevent health issues
                    </CardButton>

                </QuestList>
            </QuizWrapperStyled>
        </div>
    )

}

