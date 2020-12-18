import React from 'react'
import logo from "../../../../assets/images/logo.svg"
import Logo from "../../../common/Logo/Logo";
import Header from "../../../Header/Header";
import {TypographyHGroup, TypographySupTitle, TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {CardButtonGender} from "../../../common/Cards/Cards";

export default ({setFieldValue, currentValue, indexState, setFieldsComponentsState}) => {

    const handleChoiceGender = value => {
        setFieldValue("gender", value)
        setFieldsComponentsState()
    }

    return (
        <>
            <Header style={{marginBottom: "34px"}}>
                <Logo url={logo}/>
            </Header>
            <TypographyHGroup style={{marginBottom: "48px"}}>
                <TypographySupTitle style={{marginBottom: "5px"}}>
                    Займёт у вас не больше минуты
                </TypographySupTitle>
                <TypographyTitle>
                    Получите ваш персональный план по снижению веса
                </TypographyTitle>
            </TypographyHGroup>
            <div style={{marginBottom: "31px"}}>
                Выберите ваш пол
            </div>
            <LayoutFlex width="100%" heigth="100%">
                <CardButtonGender
                    type="button"
                    title="True"
                    gender="male"
                    isActive={currentGender === "male"}
                    style={{marginRight: "24px"}}
                    onClick={() => handleChoiceGender("male")}
                />
                <CardButtonGender
                    type="button"
                    title="Female"
                    gender="female"
                    isActive={currentGender === "female"}
                    onClick={() => handleChoiceGender("female")}
                />
            </LayoutFlex>
        </>
    )

}

