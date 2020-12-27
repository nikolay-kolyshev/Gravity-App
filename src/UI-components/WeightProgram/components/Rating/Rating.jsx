import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {CardRating, ImageRatingWrapper, RatingStyled} from "./Rating-styled";
import cardRating from "../../../../assets/images/weight_program/rating/card_rating.svg"

export default ({...restProps}) => {

    return (

        <RatingStyled {...restProps}>
            <Typography size="18px" spanWeight={500} style={{marginBottom: "34px"}}>
                <span style={{color: "#7B6EEC"}}>С нами занимаются</span> занимаются
                <br/>
                <span style={{color: "#FF7205"}}>650 000 человек</span> по всему миру
            </Typography>
            <CardRating>
                <ImageRatingWrapper>
                    <img src={cardRating}/>
                </ImageRatingWrapper>
            </CardRating>
        </RatingStyled>

    )


}