import React from "react"
import {
    ButtonStyled,
} from "./Button-styled";
export const Button = ({isActive, children}) => (
    <ButtonStyled isActive={isActive}>
        <div>
            {children}
        </div>
    </ButtonStyled>
)
