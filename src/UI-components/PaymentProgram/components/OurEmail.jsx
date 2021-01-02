import React from "react";
import {StartNowTitle} from "../PaymentProgram-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";

export default ({...restProps}) => {

    return (
        <div {...restProps}>

            <Typography align="center" spanColor="#7B6AEA">
                Have a question? Write to us:<br/>
                <span>support@gravitynohe.fit</span>
            </Typography>

        </div>
    )

}