import styled from "styled-components"
import {Typography} from "../../styles/common-components/Typography-styled";

export const PlanTimeLeftStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const PlanText = styled(Typography)`
    span {
      color: ${({theme}) => theme.colors.secondary};
    }
`
