import styled from "styled-components"

const themeFont = props => ({
    fontFamily: props.theme.font.family,
    fontSize: props.theme.font.size,
    fontTitleSize: props.theme.font.titleSize
})

export const Typography = styled.span.attrs(themeFont)`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize}px;
`

export const TypographyTitle = styled.h1.attrs(themeFont)`
  font-family: ${props => props.fontFamily};
  font-size: ${({fontTitleSizeCustom, fontTitleSize}) => fontTitleSizeCustom || fontTitleSize}px;
  font-weight: 500;
`

export const TypographySupTitle = styled.h1.attrs(themeFont)`
  font-family: ${props => props.fontFamily};
  font-size: 28px;
  font-weight: 500;
`
