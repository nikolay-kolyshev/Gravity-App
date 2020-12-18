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
import {QuizWrapperConfirmStyled, QuizWrapperStyled} from "../../QuizWrapperStyled";
import {Button} from "../../../common/Buttons/Button";
import InputBox from "../../../common/InputBox/InputBox";
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
export default ({setFieldValue, currentAge, fieldsComponentsState, setFieldsComponentsState, nextKey,previousKey}) => {
    let age = currentAge
    const handleMainAge = value => {
        setFieldValue("age", value)
        setFieldsComponentsState({
            ...fieldsComponentsState,
            "ageLayout": false,
            [nextKey]: true
        })
    }
    const pageBack = () =>{
        setFieldsComponentsState({
            ...fieldsComponentsState,
            "ageLayout": false,
            [previousKey]: true
        })
    }
    const handleChange = (event) =>{
        console.log((handleAgeFormat(age)));
        age=event.target.value
        console.log(age);
        setFieldValue("age", age)
        setFieldsComponentsState({
            ...fieldsComponentsState,
            "ageLayout": false,
            [nextKey]: true,
            "ageLayout": true
        })
    }
    const handleAgeFormat = (age) => {

        if((age > 18) && (age < 90)){
            return true;
        }
        else return false;
    }
    return (
            <QuizWrapperConfirmStyled>
                <div>
                    <div type="button" onClick={() => pageBack()} style={{minWidth:"100"}}>
                        <IconStyled icon={BackIcon} style={{maxWidth:"24px",maxHeight:"24px"}}/>
                    </div>
                    <TypographyTitle style={{marginTop:"20px",marginBottom:"60px",textAlign:"center"}}>
                        How old are you?
                    </TypographyTitle>
                    <InputBox />
                </div>
                <Button type="button"
                        disable={(!handleAgeFormat(age)) && "disable"}
                        isActive={(handleAgeFormat(age))}
                        onClick={() => handleMainAge()}>Next</Button>
            </QuizWrapperConfirmStyled>
    )

}

