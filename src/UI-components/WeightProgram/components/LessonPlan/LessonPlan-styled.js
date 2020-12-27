import styled from "styled-components";
import {ImageInDiv} from "../../../../styles/common-components/Images";

export const LessonPlanStyled = styled.div`
    background: linear-gradient(123.95deg, rgba(255, 188, 128, .2), rgba(199, 240, 34, .2));
    border-radius: 8px;
    padding: 43px 16px;
`

export const LessonsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 27px;
`

export const LessonItemStyled = styled.div`
    display: flex;
`

export const LessonIcon = styled.div`
    width: 24px;
    height: 24px;
    img {
        ${ImageInDiv};
    }
`

export const Review = styled.div`
    display: flex;
`
