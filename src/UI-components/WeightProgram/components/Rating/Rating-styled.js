import styled from "styled-components";
import {ImageInDiv} from "../../../../styles/common-components/Images";

export const RatingStyled = styled.div`
    width: 100%;
`

export const CardRating = styled.div`
    background-color: #F5F7FA;
    width: 100%;
    height: 122px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageRatingWrapper = styled.div`
    img {
        ${ImageInDiv}
    }
`
