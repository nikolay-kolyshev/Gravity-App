import styled, {css} from 'styled-components'
import {TypographyStyles} from "../../../styles/common-components/Typography-styled"
import {Picture} from "../Picture/Picture";

export const Card = css`
     width: 354px;
     border-radius: 7px;
     display: flex;
     align-items: center;
     transition: border 0.25s;
     text-align: left;
     padding: 20px 15px 20px 8px;
`
export const CardButtonStyled = styled.button`
     ${Card};
     padding: ${({icon}) =>(!icon) && '20px 20px'};
     border: ${ ({status}) => (status)? '2px solid #27DC8F' : '1px solid #E0E0E0'};
     &:hover {
        border: 2px solid ${({theme}) => theme.colors.primary};
     }
`
export const CardGoalStyled = styled.div`
     ${Card};
     background-color: #F8F8F8;
     span {
          font-weight: bold;
     }
`
export const Title = styled.h5`
      ${TypographyStyles};
      font-weight: bold;
`
export const IconStyled = styled(Picture)`
      margin: 22px;
      
`
export const StatusPictureStyled = styled(Picture)`
    min-width: 24px;
     min-height: 24px; 
   
`
