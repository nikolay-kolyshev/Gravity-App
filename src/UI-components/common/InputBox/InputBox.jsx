import React from "react"
import {InputBoxStyled, InputBoxStyledInner} from "./inputBoxStyled";

export default ({postfix , ...restProps}) => {
    return <InputBoxStyled postfix={postfix}>
        <InputBoxStyledInner
            autoFocus
            {...restProps}
        />
    </InputBoxStyled>
}
