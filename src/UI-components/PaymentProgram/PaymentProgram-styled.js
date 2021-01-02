import styled from "styled-components"
import {Typography} from "../../styles/common-components/Typography-styled";
import {ImageInDiv} from "../../styles/common-components/Images";

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
export const ProgramExpirienceStyled = styled.div`
  background: linear-gradient(91.94deg, #CBA5CF 0%, #798FFF 96.72%);
  padding: 42px 30px 64px 30px;
  margin-left: -24px;
  margin-right: -24px;
  div{
    display: flex;
    justify-content: space-between;
  }
`
export const ImageProgressWrapper = styled.div`
    margin:24px 0;
    display: flex;
    justify-content: center;
    img {
      display: block;
    }
`
export const UsersReviewsStyled = styled.div`
    margin: 80px 0;
    
`
export const UserReviewStyled = styled.div`
    padding-top:24px;    
    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      
    }
    p{
      text-align: left;
    }
    ${({gapLine}) => gapLine&&"padding-bottom:32px;border-bottom:1px solid #E0E0E0;"}
`
export const Img = styled.img`
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius :"20px"};
  width: ${({size}) => size ? size : "40px"};
  height: ${({size}) => size ? size : "40px"};
  display: block;
`

export const PlanCeilImageWrapper = styled.div`
    width: 100%;
    img {
        width: 100%;
    }
`

export const CardPlanCeil = styled.div`
    width: 100%;
    padding: 30px 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardPlanCeilTitle = styled(Typography)`
    span{
        color: ${({theme}) => theme.colors.primary};
    }
`

export const PaymentRefoundStyled = styled.div`
   background-color: #F0FFEB;
   border-radius: 8px;
   padding: 52px 17px 29px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 1px solid ${({theme}) => theme.colors.primary};
`

export const ImageHeader = styled.div`
   width: 56px;
   position: absolute;
   top: -36px;
   left: calc(50% - 34px);
   img{
      width: 100%;
   }
`

export const StartNowTitle = styled(Typography)`
    span{
        color: ${({theme}) => theme.colors.primary};
    }
`

export const AccordionItemStyled = styled.div`
  width: 100%;
  padding: 19px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  overflow: hidden;
`

export const AccordionHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({isActive}) => isActive ? "32px" : 0};
  transition: margin-bottom ease .5s;
  z-index: 1000000;
`

export const AccordionIconWrapper = styled.div`
  cursor: pointer;
`

export const AccordionContent = styled(Typography)`
    overflow: hidden;
    width: 100%;
    transition:
      height ease-in .4s,
      opacity ease-in .4s;
    height: ${({isActive, contentHeight}) => isActive ? contentHeight : "0px"};
    opacity: ${({isActive}) => isActive ? 1 : 0};
`