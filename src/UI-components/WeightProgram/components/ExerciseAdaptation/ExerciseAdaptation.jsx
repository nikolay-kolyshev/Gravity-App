import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import phonePhoto from "../../../../assets/images/weight_program/exercise_adaptation/phone.png"
import {ExerciseAdaptationStyled, ImagePhoneWrapper} from "./ExerciseAdaptation-styled";

export default ({...restProps}) => {

    return (

        <ExerciseAdaptationStyled {...restProps}>
            <Typography size="24px" weight={500} style={{marginBottom: "17px"}}>
                А также приятные мелочи для достижения цели
            </Typography>
            <Typography size={20} spanWeight={500} style={{marginBottom: "22px"}}>
                Тяжело или есть травмы?
                Не проблема! Программа
                подстраивается <span>после каждой тренировки</span>.
            </Typography>
            <ImagePhoneWrapper>
                <img src={phonePhoto}/>
            </ImagePhoneWrapper>
        </ExerciseAdaptationStyled>

    )


}