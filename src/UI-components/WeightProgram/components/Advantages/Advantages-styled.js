import styled from "styled-components";
import {ImageInDiv} from "../../../../styles/common-components/Images";

export const AdvantagesStyled = styled.div`
    width: 100%;
`

export const AdvantagesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 43px;
`

export const AdvantagesItemStyled = styled.div`
    display: flex;
`

export const AdvantagesIcon = styled.div`
    margin-left: 17px;
    width: 32px;
    height: 32px;
    img {
         ${ImageInDiv};
    }
`