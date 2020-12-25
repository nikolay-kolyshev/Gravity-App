import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {LessonPlanStyled} from "./LessonPlan-styled";

export default ({title}) => {

    return (

        <LessonPlanStyled>
            <Typography size={24} weight={500}>
                {title}
            </Typography>
            <div>

            </div>
            <div>

            </div>
        </LessonPlanStyled>

    )


}