import React from "react"
import {
    CardButtonStyled,
    CardGoalStyled,
    IconStyled,
    StatusPictureStyled,
    Title
} from "./Cards-styled";
import CheckmarkSmall from './../../../assets/images/other/Checkmark_small.png';
export const CardButton = ({status, icon, title, children}) => (
    <div >
        <CardButtonStyled status={status} icon={icon}>
            {icon && (<IconStyled size={32} icon={icon}/>)}
            <div>
                <div>
                    <Title>{title}</Title>
                </div>
                <div>
                    {children}
                </div>
            </div>
           {status && (<StatusPictureStyled icon={CheckmarkSmall}/>)}
        </CardButtonStyled>

    </div>
)

export const CardGoal = ({icon, children}) => (
    <CardGoalStyled>
        <IconStyled icon={icon}/>
        <div>
            {children}
        </div>
    </CardGoalStyled>
)