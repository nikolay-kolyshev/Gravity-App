import React, {useEffect, useState} from "react";
import {HorizontalCrossCount} from "../components/GraphResults/GraphResults-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";

export const useVerticalCrossElements = () => {

    const allMonths = ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек"]
    const currMonthIndex = new Date().getMonth()

    const [verticalCrossElements, setVerticalCrossElements] = useState([])

    useEffect(() => {

        setVerticalCrossElements(allMonths
            .reduce(
                (acc, item, index) => {
                    if (index === currMonthIndex) {
                        let newMonths = []
                        for (let i = index; i < index+4; i++) {
                            newMonths = [...newMonths, allMonths[i % allMonths.length]]
                        }
                        return [...acc, ...newMonths]
                    }
                    return acc
                }, []
            )
            .map(
                item => (
                    <Typography size="14px">
                        {item}
                    </Typography>
                )
            )
        )

    },[])

    return [verticalCrossElements]

}

