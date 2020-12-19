import React from "react"
import {ButtonStyled} from "./Button-styled";

export const Button = ({isActive, children, ...restProps}) => (
    <ButtonStyled disabled={!isActive} {...restProps}>
        {children}
    </ButtonStyled>
)
