import React from "react"
import {InputBoxStyled} from "./inputBoxStyled";

export default ({...restProps}) =>(
    <InputBoxStyled type="number" autofocus {...restProps}>
    </InputBoxStyled>
)
