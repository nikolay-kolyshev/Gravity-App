import React from "react"
import {CardButtonStyled, CardGoalStyled, IconStyled, Title} from "./Cards-styled";

export const CardButton = ({icon, title, children}) => (
    <CardButtonStyled>
        <IconStyled icon={icon}/>
        <div>
            <div>
                <Title>{title}</Title>
            </div>
            <div>
                {children}
            </div>
        </div>
    </CardButtonStyled>
)

export const CardGoal = ({icon, children}) => (
    <CardGoalStyled>
        <IconStyled icon={icon}/>
        <div>
            {children}
        </div>
    </CardGoalStyled>
)