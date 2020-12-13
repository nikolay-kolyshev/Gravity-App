import React from "react"
import {IconStyled} from "./Icon-styled";

export const Icon = ({icon, ...restProps}) => (
    <IconStyled {...restProps}>
        <img src={icon}/>
    </IconStyled>
)