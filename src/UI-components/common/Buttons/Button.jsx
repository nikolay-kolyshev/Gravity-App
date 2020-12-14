import React from "react"
import {
    ButtonStyled,
} from "./Button-styled";
export const Button = ({status, children}) => (
    <ButtonStyled status={status}>
        <div>
            {children}
        </div>
    </ButtonStyled>
)
