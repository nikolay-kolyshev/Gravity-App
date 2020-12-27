import React from "react";
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {
    Graph, GraphBadge,
    GraphResultsStyled, GraphTitle, GraphWrapper,
    HorizontalCrossCounts,
    HorizontalCrossLines,
    VerticalCross
} from "./GraphResults-styled";
import graphLines from "../../../../assets/images/weight_program/graph-results/grid.svg"
import GraphLine from "./GraphLine";
import graphBadgeCurr from "../../../../assets/images/weight_program/graph-results/graphBadgeCurr.svg";
import graphBadgeGoal from "../../../../assets/images/weight_program/graph-results/graphBadgeGoal.svg";
import {useHorizontalCrossElements} from "../../hooks/useHorizontalCrossElements";
import {useVerticalCrossElements} from "../../hooks/useVerticalCrossElements";


export default ({currWeight, goalWeight, ...restProps}) => {

    // TODO: horizontal && vertical namespaces reverse
    const [horizontalCrossElements, graphType] = useHorizontalCrossElements(currWeight, goalWeight)
    const verticalCrossElements = useVerticalCrossElements()

    return (
        <div {...restProps}>
            <GraphResultsStyled style={{marginBottom: "17px"}}>
                <GraphTitle>
                    <Typography
                        size="24px"
                        weight={500}
                        style={{marginBottom: "9px"}}
                    >
                        Прогноз результатов
                    </Typography>
                    <Typography
                        size="14px"
                        color="rgba(0,0,0,.5)"
                        style={{marginBottom: "47px"}}
                    >
                        за 2 месяца
                    </Typography>
                </GraphTitle>
                <GraphWrapper>
                    <Graph>
                        <HorizontalCrossLines style={{marginBottom: "15px"}}>
                            <img src={graphLines}/>
                        </HorizontalCrossLines>
                        <GraphLine graphType={graphType}/>
                        <VerticalCross>
                            {verticalCrossElements}
                        </VerticalCross>
                    </Graph>
                    <div>
                        <GraphBadge direction="curr" graphType={graphType} weight={currWeight}>
                            <img src={graphBadgeCurr}/>
                        </GraphBadge>
                        <GraphBadge direction="goal" graphType={graphType} weight={goalWeight}>
                            <img src={graphBadgeGoal}/>
                        </GraphBadge>
                    </div>
                    <HorizontalCrossCounts>
                        {horizontalCrossElements}
                    </HorizontalCrossCounts>
                </GraphWrapper>
            </GraphResultsStyled>

            <div>
                <Typography size="11px" color="#959594" align="center" lineHeight="13.13px">
                    Consult your physician first. This is more than lost by the average user. The chart is a non-customized illustration.
                </Typography>
            </div>

        </div>

    )

}