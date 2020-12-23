import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import useListValues from "../../hooks/useListValues";
import maleImage from "../../../../../src/assets/images/other/male_circle.png"
import femaleImage from "../../../../../src/assets/images/other/female_circle.png"
import {ImageWrapper, QuestListStyled, SelectorWrapper} from "./QuizMostAttemption-styled";
import {Button} from "../../../common/Buttons/Button";
import {ButtonWrapper} from "../../Quiz-styled";
import {CardButtonListStyled} from "../../../common/Cards/Cards-styled";

const initialValues = new Map ([
    ["Arms", false],
    ["Chest", false],
    ["Back", false],
    ["Belly", false],
    ["Butt", false],
    ["Legs", false]
])

export default ({setFieldValue, allValues, currentValue, handlePageNext, currentKey, error}) => {

    const [valuesMap, setValuesMap] = useListValues(initialValues, currentValue)

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
            <CardButtonListStyled
                type="button"
                isActive={value}
                ContentWrapper={true}
                paddingX={0} paddingY={10}
                bodyPart={key}
                bold
                onClick={() => handleSelect(key)}
            >
                {key}
            </CardButtonListStyled>
        )
    )

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"20px"}} align="center">
                Which area needs the most attention?
            </TypographyTitle>
            <SelectorWrapper>
                <ImageWrapper>
                    <img src={allValues["gender"] === "female" ? femaleImage : maleImage}/>
                </ImageWrapper>
                <QuestListStyled>
                    {valuesElements}
                </QuestListStyled >
            </SelectorWrapper>
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

