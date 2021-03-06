import React, {useEffect, useState} from "react"
import {PlanText, PlanTimeLeftStyled} from "../PaymentProgram-styled";

export default ({endDate, ...restProps}) => {

    const getCurrentTimeLeft = () => {
        const seconds = Math.trunc((endDate-Date.now()) / 1000)
        const prefix = seconds/60 < 10 ? "0" : ""
        return `${prefix}${Math.trunc(seconds/60)}:${seconds%60}`
    }

    const [timeLeft, setTimeLeft] = useState(endDate-Date.now())

    useEffect(() => {
        if (timeLeft < 0) {
            alert("Иди нахуй")
            return
        }
        setTimeout(() => {
            setTimeLeft((endDate-Date.now()))
        },1000)
    }, [timeLeft])

    return (
        <PlanTimeLeftStyled {...restProps}>
            <PlanText weight={500} align="center">
                Plan Reserved for <span>{getCurrentTimeLeft()}</span>
            </PlanText>
        </PlanTimeLeftStyled>
    )

}