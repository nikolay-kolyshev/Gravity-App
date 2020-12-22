import React, {useEffect, useState} from "react"
import {easeCubicInOut} from "d3-ease";
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import {Animate} from "react-move";
import {withTheme} from "styled-components";
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";

const speedAnimation = 400

const QuizProgressCircle = React.memo(({progressStringsArray, durationStep, start, end, theme}) => {

    return (
        <AnimatedProgressProvider
            durationStep={durationStep}
            easingFunction={easeCubicInOut}
            values= {
                [
                    start,
                    ...progressStringsArray.map((item, index) => {
                        return start + ((end - start) / progressStringsArray.length) * (index+1)
                    })
                ]
            }
        >
            {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbarWithChildren
                        value={value}
                        styles={buildStyles({
                            pathTransitionDuration: durationStep / 1000,
                            textSize: '36px',
                            pathColor: theme.colors.primary,
                            textColor: theme.colors.primary
                        })}
                        strokeWidth={7}
                    >
                        <TypographyTitle size={57} spanSize={36}>
                            {roundedValue}<span style={{marginLeft: "3px"}}>%</span>
                        </TypographyTitle>
                    </CircularProgressbarWithChildren>
                );
            }}
        </AnimatedProgressProvider>
    )

})

const AnimatedProgressProvider = ({durationStep, easingFunction, children, values}) => {

    debugger

    const [valuesIndex, setValuesIndex] = useState(0)

    useEffect(() => {
        if (valuesIndex < values.length-1)
            setTimeout(() => {
                setValuesIndex(valuesIndex + 1)
            }, durationStep)
    }, [valuesIndex])

    return (

        <Animate
            start={() => ({
                value: values[valuesIndex]
            })}
            update={() => ({
                value: [
                    valuesIndex < values.length-1 ? values[valuesIndex] : values[values.length-1]
                ],
                timing: {
                    duration: speedAnimation,
                    ease: easingFunction
                }
            })}
        >
            {({ value }) => children(value)}
        </Animate>
    )
}

export default withTheme(QuizProgressCircle)