import styled from 'styled-components'

export const InputBoxStyled = styled.div`
    display: inline-block;
    position: relative;
    
    &:after{
      position: absolute;
      top: 2px;
      right: .5em;
      transition: all .05s ease-in-out;
      content: "${({postfix}) => !!postfix ? postfix : ""}";
    }
    
    &:hover:after,
    &:focus-within:after {
      right: 1.5em;
    }
    
    @supports (-moz-appearance:none) {
      &:after {
        right: 1.5em;
      }
    }
`

export const InputBoxStyledInner = styled.input`
    width:264px;
    font-size:56px;
    display: block;
    text-align:center;
    text-decoration: none;
    border-bottom: solid 2px #DAD9D8;
    transition: border 0.25s;
    &:hover {
      border-bottom: solid 2px ${({theme}) => theme.colors.primary};
    }
    &:focus{
       border-bottom: solid 2px ${({theme}) => theme.colors.primary};
    }
`