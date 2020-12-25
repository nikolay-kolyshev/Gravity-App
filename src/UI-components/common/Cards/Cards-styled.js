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
     border: ${ ({isActive, theme}) => (isActive) ? `2px solid ${theme.colors.primary}` : '2px solid #E0E0E0'};
     margin-left: ${({horizontalGap}) => horizontalGap || 0}px;
     margin-right: ${({horizontalGap}) => horizontalGap || 0}px;
     margin-bottom: ${({verticalGap}) => verticalGap || 8}px;
     
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
export const CardGoalListStyled = styled.div`
`

export const CardButtonListStyled = styled(CardButtonStyled)`

    padding: ${({paddingX, paddingY}) => `${paddingY+"px" || 0} ${paddingX+"px" || 0}`};
    background-color: white;
    font-weight: ${({bold}) => bold ? "bold" : "inherit"};
    display: flex;
    justify-content: center;
    align-self: center;
    position: relative;
    
    ${({bodyPart, theme}) => {

        if (!bodyPart)
            return "";
    
        let partBodyStyles = ""
    
        switch (bodyPart) {
    
            case "Arms":
                partBodyStyles = `
                            width: 25px;
                            right: -25px;
                            transform: rotate(34deg);
                         `
                break
    
            case "Back":
                partBodyStyles = `
                            width: 60px;
                            right: -52px;
                            transform: rotate(-45deg);
                            bottom: calc(50% + 15px);
                         `
                break

            case "Butt":
                partBodyStyles = `
                            width: 70px;
                            right: -55px;
                            transform: rotate(-60deg);
                            bottom: calc(50% + 25px);
                         `
                break

            case "Chest":
                partBodyStyles = `
                            width: 55px;
                            left: -55px;
                            transform: rotate(-10deg);
                            bottom: 50%;
                         `
                break

            case "Belly":
                partBodyStyles = `
                            width: 70px;
                            left: -70px;
                            transform: rotate(3deg);
                            bottom: 50%;
                         `
                break

            case "Legs":
                partBodyStyles = `
                            width: 40px;
                            left: -40px;
                            transform: rotate(-3deg);
                            bottom: 50%;
                         `
                break
    
        }
    
        return `
                &:after{
                    content: "";
                    display: block;
                    height: 3px;
                    background-color: ${theme.colors.primary};
                    position: absolute;
                    ${partBodyStyles} 
                }
            `
    }}
    
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
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 0 0 7px 7px;
`

export const IconConfirmWrapper = styled.div`
    margin-left: 10px;
    margin-top: 10px;
`
export const ImageGenderWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 56px;
    display: flex;
    justify-content: center;
    img {
      display: block;
    }
`

export const CardListStyled = styled.div`
     width: inherit;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
`
export const CardProblemStyled = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  height: 160px;
  backdrop-filter: blur(14.8927px);
  border-radius: 8px;
  padding: 14px;
  div{
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  H1{
    z-index: 2;
    color:white;
  }
  p{
    z-index: 2;
    color:white;
  }
  img{
    z-index: 1;
  }
`
export const CardProblemImage = styled.div`
  position: absolute;
  
    img {
      display: block;
      height: 100%;
      width: inherit;
    }
`
