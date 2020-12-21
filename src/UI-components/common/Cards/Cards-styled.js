import styled, {css} from 'styled-components'
import {TypographyStyles} from "../../../styles/common-components/Typography-styled"
import {Picture} from "../Picture/Picture";
import {ImageInDiv} from "../../../styles/common-components/Images";

export const Card = css`
     border-radius: 7px;
     display: flex;
     align-items: center;
     transition: border 0.25s;
     text-align: left;
     padding: 20px 15px;
`
export const CardButtonStyled = styled.button`
     ${Card};
     justify-content: space-between;
     ${({width,ContentWrapper}) => (!ContentWrapper) && (width ? `width:${width}`:`width:100%`)};
     ${({isSimple}) => isSimple && "padding: 10px 15px"};
     border: ${ ({isActive}) => (isActive) ? '2px solid #27DC8F' : '2px solid #E0E0E0'};
     &:hover {
        border: 2px solid ${({theme}) => theme.colors.primary};
     }
     div{
        display:flex;
     }
`
export const CardButtonGenderStyled = styled(CardButtonStyled)`
     width: 100%;
     height: 256px;
     padding: 0;
     flex-direction: column;
     justify-content: space-between;
     align-items: flex-start;
     position: relative;
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
      margin-right: 20px;
      height:32px;
      width:32px;
`
export const IsActivePictureStyled = styled(Picture)`
    max-width: 24px;
    max-height: 24px; 
`

export const TitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    height: 56px;
    background-color: #F8F8F8;
    border-radius: 0 0 7px 7px;
`

export const ImageGenderWrapper = styled.div`
    position: absolute;
    bottom: 56px;
    height: 224px;
    width: 100%;
    display: flex;
    justify-content: center;: center;
    img {
      display: block;
    }
`
export const CardListStyled = styled.div`
     width: inherit;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     button{
        margin-bottom: 9px;
        margin-left: ${({horizontalGap}) => horizontalGap && `7px`};
        margin-right: ${({horizontalGap}) => horizontalGap && `7px`};
     }
`
