import React from 'react'
import {Typography, TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {Button} from "../../../common/Buttons/Button";
import {ButtonWrapper} from "../../Quiz-styled";
import useQuizInjuriesValues from "../../hooks/useListValues";
import {useProgressDisplayMode} from "../../hooks/useProgressDisplayMode";
import QuizProgress from "../../common_components/QuizProgress/QuizProgress";
import useListValues from "../../hooks/useListValues";
import {CardButtonListStyled} from "../../../common/Cards/Cards-styled";

const progressStringsArray = [
    "Analyxing your dietary profile",
    "Estimating your metabolic age",
    "Adapting the plan to your needs",
    "Selecting suitebla recipes",
    "Your personalized plan is ready!"
]

const durationStep = 1000

const initialValues = new Map ([
    ["Спина, поясница", false],
    ["Плечи", false],
    ["Локти", false],
    ["Кисти рук", false],
    ["Пупочная грыжа", false],
    ["Колени", false],
    ["Тазобедренный сустав", false],
    ["Голеностоп, лодыжка", false]
])

export default ({setFieldValue, currentValue, handlePageNext, currentKey, error}) => {

    const [valuesMap, setValuesMap] = useListValues(initialValues, currentValue)
    const [progressDisplayMode, setProgressDisplayMode] = useProgressDisplayMode(progressStringsArray.length, durationStep, handlePageNext)

    const handleConfirm = () => {
        const newFieldValue = Object.keys(Object.fromEntries(valuesMap)).filter(
            item => valuesMap.get(item)
        )
        setFieldValue([currentKey], newFieldValue)
        setProgressDisplayMode(true)
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
                paddingX={15} paddingY={10}
                horizontalGap={8}
                verticalGap={8}
                onClick={() => handleSelect(key)}
                bold={false}
            >
                {key}
            </CardButtonListStyled>
        )
    )

    if (progressDisplayMode)
        return <QuizProgress progressStringsArray={progressStringsArray} durationStep={durationStep} start={0} end={60}/>

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"20px"}} align="center">
                How hard are you prepared to work?
            </TypographyTitle>
            <Typography style={{marginBottom:"40px"}} align="center">
                Если да, отметьте что болит. Программа адаптируется под эти ограничения.
            </Typography>
            <QuestList>
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

