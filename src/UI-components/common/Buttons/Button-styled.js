import styled, {css} from 'styled-components'
import {TypographyStyles} from "../../../styles/common-components/Typography-styled"
import {Card} from '../Cards/Cards-styled'

export const ButtonStyled = styled.button`
     ${Card};
     padding:22px 0px;
     justify-content:center;
     border-radius: 16px;
     border: ${ ({status}) => (!status) && '1px solid #E0E0E0'};
     background: ${ ({status}) => (status) ? 'linear-gradient(180deg, #1F5BF4 0%, #7050F4 99.99%)' : '#E9E9E9'};
     color: ${ ({status}) => (status) ? 'white':'#BABABA'};
     transition: 1s;
`