import styled from "styled-components"
import Progress from 'react-progressbar'

export const ProgressStyled = styled(Progress)`
    .progressbar-progress {
      background-color: ${({theme}) => theme.colors.primary} !important;
    }
`
