import styled from 'styled-components'
import {ImageInDiv} from "../../../styles/common-components/Images"

export const LogoStyled = styled.div`
     width: ${({width}) => width || 101}px;
     height: ${({height}) => height || 40}px;
     
     img {
        width: 100%;
        height: 100%;
     }
`
