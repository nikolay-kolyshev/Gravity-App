import React from "react";
import graphDown from "../../../../assets/images/weight_program/graph-results/graphDown.svg";
import graphUp from "../../../../assets/images/weight_program/graph-results/graphUp.svg";
import graphFlat from "../../../../assets/images/weight_program/graph-results/graphFlat.svg";
import {GraphLineStyled} from "./GraphResults-styled";

export default ({months, currWeight, goalWeight, graphType, ...restProps}) => {

    const getGraphSrc = () => {
        switch (graphType) {
            case "Up": return graphUp
            case "Down": return graphDown
            case "Flat": return graphFlat
        }
    }

    return (
        <div>
            <GraphLineStyled>
                <img src={getGraphSrc()}/>
            </GraphLineStyled>
        </div>
    )

}