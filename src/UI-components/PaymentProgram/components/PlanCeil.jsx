import React from "react";
import femaleImage from "../../../assets/images/payment_program/plan_ceil/female.png"
import {CardPlanCeil, CardPlanCeilTitle, PlanCeilImageWrapper} from "../PaymentProgram-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";

export default ({...restProps}) => {

    return (
        <div {...restProps}>

            <PlanCeilImageWrapper>
                <img src={femaleImage}/>
            </PlanCeilImageWrapper>
            <CardPlanCeil>
                <CardPlanCeilTitle weight={500} size="24px" style={{marginBottom: "16px"}}>
                    7 Дней <span>Бесплатно</span>
                </CardPlanCeilTitle>
                <Typography lineThrough>
                    Далее  <span>$40.00</span>  $29.90<br/>
                    за каждые 2 месяца
                </Typography>
            </CardPlanCeil>

        </div>
    )

}