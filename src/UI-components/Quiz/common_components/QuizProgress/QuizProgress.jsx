import React, {useEffect, useState} from 'react'
import {Typography} from "../../../../styles/common-components/Typography-styled";
import 'react-circular-progressbar/dist/styles.css';
import {withTheme} from 'styled-components'
import {CircleWrapper, StringsWrapper} from "./QuizProgress-styled";
import QuizProgressCircle from "./QuizProgressCircle";
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {AnimatedList} from "react-animated-list";

const QuizProgress = ({progressStringsArray, theme, durationStep, start, end}) => {

    const lengthProgressStringsArray = progressStringsArray.length
    const [lengthProgressStringsElements, setLengthProgressStringsElements] = useState(progressStringsArray)

    useEffect(() => {
        setTimeout(() => {
            setLengthProgressStringsElements(
                lengthProgressStringsElements.filter((item, index) => index !== 0)
            )
        }, durationStep)
    }, [lengthProgressStringsElements])

    return (
        <div>
            <LayoutFlex witdh="100%" horizontalCenter>
                <CircleWrapper style={{marginBottom: "57px"}}>
                    <QuizProgressCircle progressStringsArray={progressStringsArray} durationStep={durationStep} start={start} end={end}/>
                </CircleWrapper>
            </LayoutFlex>

            <StringsWrapper>
                <AnimatedList animation={"grow"}>
                    {lengthProgressStringsElements.map(
                        (string, index) => (
                            <Typography key={string} style={{marginBottom: "16px"}}>
                                {string}
                            </Typography>
                        )
                    )}
                </AnimatedList>
            </StringsWrapper>
        </div>
    )

}

export default withTheme(QuizProgress)


