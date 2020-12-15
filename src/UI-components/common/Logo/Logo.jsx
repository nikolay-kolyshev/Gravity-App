import React from 'react'
import {LogoStyled} from "./Logo-styled";

export default ({url, alt}) => (
    <LogoStyled>
        <img src={url} alt={alt || "Логотип Gravity"}/>
    </LogoStyled>
)




