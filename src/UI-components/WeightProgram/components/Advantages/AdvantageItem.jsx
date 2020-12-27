import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {AdvantagesIcon, AdvantagesItemStyled} from "./Advantages-styled";

export default ({icon, title, text}) => {

    return (

        <AdvantagesItemStyled>
            <div style={{marginRight: "38px"}}>
                <AdvantagesIcon>
                    <img src={icon}/>
                </AdvantagesIcon>
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
        </AdvantagesItemStyled>

    )

}