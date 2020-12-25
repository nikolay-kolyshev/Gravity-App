import styled from "styled-components"
import Div100vh from "react-div-100vh";

export const LayoutOuter = styled.div`
  background-color: #eee;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LayoutInner = styled.main`
  background-color: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px 24px;
  max-width: 375px; 
  height: 100%;
  position: relative;
`

export const LayoutFlex = styled.div`
  display: flex;
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({vertical}) => vertical && "flex-direction: column"};
  ${({horizontalCenter, vertical}) => horizontalCenter && (vertical ? "align-items: center" : "justify-content: center")};
  ${({verticalCenter, vertical}) => verticalCenter && (vertical ? "justify-content: center" : "align-items: center")};
  ${({wrap}) => wrap && "flex-wrap: wrap"};
`
