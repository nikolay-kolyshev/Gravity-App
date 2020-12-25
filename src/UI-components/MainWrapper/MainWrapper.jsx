import React from 'react'
import logo from "../../assets/images/logo.svg"
import Header from "../Header/Header";
import {TypographyHGroup, TypographySupTitle, TypographyTitle} from "../../styles/common-components/Typography-styled";
import Logo from "../common/Logo/Logo";


export default ({title, subTitle, children}) => {

    return (
        <div>
            <Header style={{marginBottom: "34px"}}>
                <Logo url={logo}/>
            </Header>
            <TypographyHGroup style={{marginBottom: "48px"}}>
                <TypographySupTitle style={{marginBottom: "5px"}}>
                    {subTitle}
                </TypographySupTitle>
                <TypographyTitle>
                    {title}
                </TypographyTitle>
            </TypographyHGroup>
            {children}
        </div>
    )

}

