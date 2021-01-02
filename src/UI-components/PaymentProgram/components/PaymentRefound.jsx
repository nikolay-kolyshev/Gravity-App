import React from "react";
import {ImageHeader, PaymentRefoundStyled} from "../PaymentProgram-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";
import {ICON_PAYMENT_SHIELD} from "../../../constans/icons";

export default ({...restProps}) => {

    return (
        <PaymentRefoundStyled {...restProps}>
            <ImageHeader>
                <img src={ICON_PAYMENT_SHIELD}/>
            </ImageHeader>
            <Typography size="20px" weight={500} align="center" style={{marginBottom: "11px"}}>
                7-day Money-Back<br/>
                Guarantee
            </Typography>
            <Typography align="center">
                Мы гарантируем полный возврат средств,
                если приложение не подойдет в течение первой недели.
                Деньги возвращаем без лишних вопросов!
            </Typography>
        </PaymentRefoundStyled>
    )

}