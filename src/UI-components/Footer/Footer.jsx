import React from "react";
import {FooterLink, FooterStyled} from "./Footer-styled";
import {Typography} from "../../styles/common-components/Typography-styled";

export default ({...restProps}) => {

    return (
        <FooterStyled {...restProps}>

            <Typography weight={700}>
                Fitness Labs © 2020
            </Typography>
            <Typography style={{marginBottom: "20px"}}>
                All Rights Reserved
            </Typography>
            <Typography>
                Используя этот сервис, вы соглашаетесь<br/>
                с <FooterLink>Terms of Service</FooterLink> и <FooterLink>Privacy Policy</FooterLink>
            </Typography>

        </FooterStyled>
    )

}