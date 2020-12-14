import React from "react"
import {PictureStyled} from "./Picture-styled";

export const Picture = ({icon, ...restProps}) => (
    <PictureStyled {...restProps}>
        <img src={icon}/>
    </PictureStyled>
)