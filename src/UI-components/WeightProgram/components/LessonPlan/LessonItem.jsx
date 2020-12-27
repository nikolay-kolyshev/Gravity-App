import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {LessonIcon, LessonItemStyled} from "./LessonPlan-styled";

export default ({icon, count, text, postfix}) => {

    return (

        <LessonItemStyled>
            <div style={{marginRight: "10px"}}>
                <LessonIcon>
                    <img src={icon}/>
                </LessonIcon>
            </div>
            <div>
                <Typography
                    size={"36px"}
                    weight={500}
                    style={{marginBottom: "15px"}}
                >
                    {count}{postfix && " " + postfix}
                </Typography>
                <Typography>
                    {text}
                </Typography>
            </div>
        </LessonItemStyled>

    )


}