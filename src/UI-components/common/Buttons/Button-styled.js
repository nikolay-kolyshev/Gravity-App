import styled from 'styled-components'
import {Card} from '../Cards/Cards-styled'

export const ButtonStyled = styled.button`
     ${Card};
     width: 100%;
     padding: 21px 0;
     justify-content: center;
     border-radius: 16px;
     background: #E9E9E9;
     border: 1px solid #E0E0E0;
     background: linear-gradient(180deg, #1F5BF4 0%, #7050F4 99.99%);
     color: white;
     font-size: 18px;
     transition: 1s;
     
     &:disabled {
        background: #E9E9E9;
        color: #BABABA;
     }
`
