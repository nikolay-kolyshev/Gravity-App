import styled from "styled-components"

const themeFont = (props) => ({
    fontFamily: props.theme.font.family,
    fontSize: props.theme.font.size,
    fontTitleSize: props.theme.font.titleSize
})

export const Typography = styled.span.attrs(themeFont)`
  font-family: ${props =>   props.fontFamily};
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
export const TypographyСlassified = styled.h1.attrs(themeFont)`
    font-family: ${props => props.fontFamily};
    ${ props =>{
        if(props.arguments && props.dimention)
            console && console.error("TypographyСlassified:overriding __arguments property with __dimention property");
        if(props.arguments){
            return `font-size:${props.arguments.fontSize}px;`+
                   ` font-weight: ${props.arguments.fontWeigth};`;
        }
        else{
            switch (props.dimention){
                case "small":
                    return "font-size: 12px;font-weight: 400;";
                case "medium":
                    return "font-size: 16px;font-weight: 500;";
                case "large":
                    return "font-size: 20px;font-weight: 600;";
            };}}
    };
`
