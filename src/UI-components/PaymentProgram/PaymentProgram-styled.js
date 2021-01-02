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