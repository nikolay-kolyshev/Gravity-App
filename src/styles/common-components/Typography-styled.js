import styled, {css} from "styled-components"

export const TypographyStyles = css`
  font-size: ${({theme}) => theme.font.size}px;
`

export const Typography = styled.p`
  ${TypographyStyles}
`

export const TypographyHGroup = styled.hgroup`
  text-align: center;
`

export const TypographyTitle = styled.h1`
  font-size: ${({size, theme}) => size || theme.font.titleSize}px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: -0.05em;
`

export const TypographySupTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.secondary};
  line-height: 120%;
  letter-spacing: -0.05em;
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
