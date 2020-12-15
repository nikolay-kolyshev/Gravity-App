import styled, {css} from 'styled-components'
import {TypographyStyles} from "../../../styles/common-components/Typography-styled"
import {Card} from '../Cards/Cards-styled'

export const ButtonStyled = styled.button`
     ${Card};
     width: 100%;
     padding:22px 0px;
     justify-content:center;
     border-radius: 16px;
     border: ${ ({isActive}) => (!isActive) && '1px solid #E0E0E0'};
     background: ${ ({isActive}) => (isActive) ? 'linear-gradient(180deg, #1F5BF4 0%, #7050F4 99.99%)' : '#E9E9E9'};
     color: ${ ({isActive}) => (isActive) ? 'white':'#BABABA'};
     transition: 1s;
`
