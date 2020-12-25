import React from 'react'
import logo from "../../../../assets/images/logo.svg"
import Logo from "../../../common/Logo/Logo";
import Header from "../../../Header/Header";

import {
    TypographyHGroup,
    TypographySupTitle,
    TypographyTitle,
    TypographyСlassified
} from "../../../../styles/common-components/Typography-styled";
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {CardButtonGender} from "../../../common/Cards/Cards";
import WeightProgram from "../../../WeightProgram/WeightProgram";
import MainWrapper from "../../../MainWrapper/MainWrapper";


export default ({handlePageNext, setFieldValue, currentValue, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <MainWrapper
            supTitle="Займёт у вас не больше минуты"
            title="Получите ваш персональный план по снижению веса"
        >
            <LayoutFlex width="100%" heigth="100%">
                <CardButtonGender
                    type="button"
                    title="Male"
                    gender="male"
                    isActive={currentValue === "male"}
                    style={{marginRight: "8px"}}
                    onClick={() => handleConfirm("male")}
                />
                <CardButtonGender
                    type="button"
                    title="Female"
                    gender="female"
                    isActive={currentValue === "female"}
                    onClick={() => handleConfirm("female")}
                />
            </LayoutFlex>
        </MainWrapper>
    )

}

