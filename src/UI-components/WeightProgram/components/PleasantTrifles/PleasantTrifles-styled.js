import styled from "styled-components";
import {ImageInDiv} from "../../../../styles/common-components/Images";

export const PleasantTriflesStyled = styled.div`
    width: 100%;
`

export const TriflesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 41px;
`

export const TrifleItemStyled = styled.div`
    display: flex;
`

export const TrifleIcon = styled.div`
    width: 36px;
    display: flex;
    justify-content: flex-end;
    img {
      display: block;
    }
`