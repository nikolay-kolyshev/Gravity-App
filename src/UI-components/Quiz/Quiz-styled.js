import styled from "styled-components"
import Progress from 'react-progressbar'

export const ProgressStyled = styled(Progress)`
    .progressbar-progress {
      background-color: ${({theme}) => theme.colors.primary} !important;
    }
`

export const ButtonWrapper = styled.div`
     width: 100%; 
     position: absolute;
     bottom: 0;
     left: 0;
     padding: 0 31px 59px;
`