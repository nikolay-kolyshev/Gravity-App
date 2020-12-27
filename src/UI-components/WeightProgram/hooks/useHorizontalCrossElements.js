import React, {useEffect, useState} from "react";
import {HorizontalCrossCount} from "../components/GraphResults/GraphResults-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";

export const useHorizontalCrossElements = (currWeight, goalWeight) => {

    const [horizontalCrossElements, setHorizontalCrossElements] = useState([])
    const [graphType, setGraphType] = useState([])

    useEffect(() => {

        let horizontalCrossMin
        let horizontalCrossMax
        let horizontalCrossElementsArray = []

        if (currWeight > goalWeight) {
            setGraphType("Down")
            const graphRange = Math.trunc((currWeight - goalWeight) / 53 * 100)
            horizontalCrossMin = goalWeight - Math.trunc(graphRange * .39)
            horizontalCrossMax = currWeight + Math.trunc(graphRange * .09)
        }
        else if (currWeight < goalWeight) {
            setGraphType("Up")
            const graphRange = Math.trunc((goalWeight - currWeight) / 53 * 100)
            horizontalCrossMin = currWeight - Math.trunc(graphRange * .39)
            horizontalCrossMax = goalWeight + Math.trunc(graphRange * .09)
        }
        else {
            setGraphType("Flat")
            horizontalCrossElementsArray=[currWeight, currWeight, currWeight, currWeight, currWeight].map(
                item => (
                    <HorizontalCrossCount key={item}>
                        <Typography size="11px" color="rgba(0,0,0,.5)">{item}</Typography>
                    </HorizontalCrossCount>
                )
            )
        }

        for (let i = horizontalCrossMax; i >= horizontalCrossMin; i -= Math.trunc((horizontalCrossMax - horizontalCrossMin) / 4)) {

            horizontalCrossElementsArray = [
                ...horizontalCrossElementsArray,
                <HorizontalCrossCount key={i}>
                    <Typography size="11px" color="rgba(0,0,0,.5)" style={{visibility: i > 0 ? "visible" : "hidden"}}>{i}</Typography>
                </HorizontalCrossCount>
            ]

        }

        setHorizontalCrossElements(horizontalCrossElementsArray)

    },[])

    return [horizontalCrossElements, graphType]

}

