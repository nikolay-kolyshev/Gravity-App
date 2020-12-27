import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {TrifleIcon, TrifleItemStyled} from "./PleasantTrifles-styled";

export default ({icon, title, text}) => {

    return (

        <TrifleItemStyled>
            <div style={{marginRight: "38px"}}>
                <TrifleIcon>
                    <img src={icon}/>
                </TrifleIcon>
            </div>
            <div>
                <Typography
                    weight={500}
                    style={{marginBottom: "12px"}}
                >
                    {title}
                </Typography>
                <Typography>
                    {text}
                </Typography>
            </div>
        </TrifleItemStyled>

    )


}