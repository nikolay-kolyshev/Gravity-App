import React, {useState} from "react"
import MainWrapper from "../../../MainWrapper/MainWrapper";
import {TypographyLine} from "../../../../styles/common-components/Typography-styled";
import {CardButton} from "../../../common/Cards/Cards";
import {CardGoalStyled} from "../../../common/Cards/Cards-styled";
import {GoalsStyled} from "./Goals-styled";
import {ICON_APPLE} from "../../../../constans/icons";
import CardGoal from "./CardGoal";

export default props => {

    return (
        <GoalsStyled {...props}>
            <TypographyLine size="24" style={{marginBottom: "21px"}}>
                Цели
            </TypographyLine>
            <div>
                <CardGoal
                    icon={ICON_APPLE}
                    title="Lose Weight"
                    style={{marginBottom: "8px"}}
                >
                    aaaa
                </CardGoal>
                <CardGoal
                    icon={ICON_APPLE}
                    title="Lose Weight"
                    style={{marginBottom: "8px"}}
                >
                    aaaa
                </CardGoal>
                <CardGoal
                    icon={ICON_APPLE}
                    title="Lose Weight"
                >
                    aaaa
                </CardGoal>
            </div>
        </GoalsStyled>
    )

}