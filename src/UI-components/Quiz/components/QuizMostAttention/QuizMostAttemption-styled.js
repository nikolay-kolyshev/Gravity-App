import styled from "styled-components"
import {QuestList} from "../../../common/Cards/Cards";
import {CardListStyled} from "../../../common/Cards/Cards-styled";

export const SelectorWrapper = styled.div`
    width: 100%;
    position: relative;
`

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    img {
        display: block;
        width: 100%;
        padding: 0 13px;
    }
`

export const QuestListStyled = styled(CardListStyled)`
    padding-top: 60px;
    position: absolute;
    top: 0;
    left: 0;
    
    display: grid;
    grid-template-columns: minmax(104px, auto) minmax(104px, auto);
    gap: 30px 0;
    justify-content: space-between;
`