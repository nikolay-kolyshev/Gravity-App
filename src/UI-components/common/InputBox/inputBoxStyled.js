import styled, {css} from 'styled-components'

export const InputBoxStyled = styled.input`
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
       border-bottom: solid 2px ${({theme}) => theme.colors.primary}
    }
`