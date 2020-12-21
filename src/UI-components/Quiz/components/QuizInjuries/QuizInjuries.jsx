import React, {useState} from 'react'
import {Typography, TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {Button} from "../../../common/Buttons/Button";
import {ButtonWrapper} from "../../Quiz-styled";
import useQuizInjuriesValues from "../../hooks/useQuizInjuriesValues";

export default ({setFieldValue, currentValue, handlePageNext, currentKey, error}) => {

    const [valuesMap, setValuesMap] = useQuizInjuriesValues(currentValue)

    const handleConfirm = () => {
        const newFieldValue = Object.keys(Object.fromEntries(valuesMap)).filter(
            item => valuesMap.get(item)
        )
        setFieldValue([currentKey], newFieldValue)
        handlePageNext()
    }

    const handleSelect = currentKey => {
        setValuesMap(
            new Map (Object.entries(Object.fromEntries(valuesMap)).map(
                ([key, value]) =>
                    currentKey === key ? [key, !value] : [key, value]
            ))
        )
    }

    const valuesElements = Object.entries(Object.fromEntries(valuesMap)).map(
        ([key, value]) => (
            <CardButton type="button" isActive={value} ContentWrapper={true} onClick={() => handleSelect(key)}>
                {key}
            </CardButton>
        )
    )

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"20px"}} align="center">
                How hard are you prepared to work?
            </TypographyTitle>
            <Typography style={{marginBottom:"40px"}} align="center">
                Если да, отметьте что болит. Программа адаптируется под эти ограничения.
            </Typography>
            <QuestList horizontalGap={true}>
                {valuesElements}
            </QuestList>
            <ButtonWrapper>
                <Button
                    type="button"
                    isActive={!error}
                    onClick={() => handleConfirm()}
                >
                    Next
                </Button>
            </ButtonWrapper>
        </div>
    )

}

