import styled, {css} from "styled-components"

export const TypographyStyles = css`
  font-size: ${({theme}) => theme.font.size}px;
`

export const Typography = styled.span`
  ${TypographyStyles}
`

export const TypographyTitle = styled.h1`
  font-size: ${({fontTitleSizeCustom, fontTitleSize}) => fontTitleSizeCustom || fontTitleSize}px;
  font-weight: 500;
`

export const TypographySupTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.secondary};
`

export const TypographyСlassified = styled(Typography)`
    ${ ({size}) => {
            if (!!size)
                switch (size){
                    case "small":
                        return "font-size: 12px;";
                    case "medium":
                        return "font-size: 16px;";
                    case "large":
                        return "font-size: 20px";
                    default:
                        return `font-size: ${size}px`;
                }
        }
    }
`
