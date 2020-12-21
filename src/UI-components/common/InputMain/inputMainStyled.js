import styled from 'styled-components'

export const InputMainStyled = styled.input`
    width: 100%;
    padding: 22px 15px;
    font-size: 16px;
    display: block;
    text-decoration: none;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    transition: border 0.25s;
    &:hover {
      border: 2px solid ${({theme}) => theme.colors.primary};
    }
    &:focus{
       border: 2px solid ${({theme}) => theme.colors.primary};
    }
`