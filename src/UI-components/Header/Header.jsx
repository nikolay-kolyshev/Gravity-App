import React from 'react'
import logo from "../../assets/images/logo.svg"
import Logo from "../common/Logo/Logo";
import {HeaderStyled} from "./Header-styled";

export default (props) => {

    return (
        <HeaderStyled {...props}>
            <Logo url={logo}/>
        </HeaderStyled>
    )

}

