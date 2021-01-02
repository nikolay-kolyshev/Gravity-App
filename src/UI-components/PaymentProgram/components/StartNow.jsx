import React from "react";
import {StartNowTitle} from "../PaymentProgram-styled";

export default ({...restProps}) => {

    return (
        <div {...restProps}>

            <StartNowTitle weight={500} size="24px" align="center" lineHeight="24px">
                Start now!<br/>
                You are 8 Weeks Away<br/>
                <span>from New Body</span>
            </StartNowTitle>

        </div>
    )

}