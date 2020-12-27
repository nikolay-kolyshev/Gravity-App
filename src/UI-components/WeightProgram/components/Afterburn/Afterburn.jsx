import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import graphPhoto from "../../../../assets/images/weight_program/afterburn/graph.svg"
import {AfterburnStyled, ImageGraphWrapper} from "./Afterburn-styled";

export default ({...restProps}) => {

    return (

        <AfterburnStyled {...restProps}>
            <Typography size="24px" weight={500} style={{marginBottom: "16px"}}>
                Калории сжигаются даже спустя сутки
            </Typography>
            <Typography size={20} spanWeight={500}  style={{marginBottom: "40px"}}>
                Благодаря специальным тренировкам <span>AfterBurn</span>
            </Typography>
            <ImageGraphWrapper>
                <img src={graphPhoto}/>
            </ImageGraphWrapper>
        </AfterburnStyled>

    )


}