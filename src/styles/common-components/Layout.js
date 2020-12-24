import styled from "styled-components"
import Div100vh from "react-div-100vh";

export const LayoutOuter = styled(Div100vh)`
  background-color: #ddd;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LayoutInner = styled.main`
  background-color: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px 16px;
  max-width: 375px;
  width: 100%;
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
