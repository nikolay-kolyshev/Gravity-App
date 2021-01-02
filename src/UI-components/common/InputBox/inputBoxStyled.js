import styled from 'styled-components'
import ContentEditable from "react-contenteditable";

export const InputBoxStyled = styled.div`
    width: 100%;
    padding: 0 54px;
`

export const InputBoxStyledInner = styled(ContentEditable)`
    white-space: nowrap;
    width: 100%;
    font-size: 56px;
    caret-color: #2F8FFF;
    display: block;
    text-align: center;
    text-decoration: none;
    border-bottom: solid 2px #DAD9D8;
    transition: border 0.25s;
    font-weight: 500;
    &:hover {
      border-bottom: solid 2px ${({theme}) => theme.colors.primary};
    }
    &:focus{
       border-bottom: solid 2px ${({theme}) => theme.colors.primary};
    }
    overflow: hidden;
    .inputPostfix {
        font-size: 36px;
        border: none;
          outline: 0px solid transparent;
        &:focus, &:active {
          outline: 0px solid transparent;
        }
        [contenteditable]:focus {
          outline: 0px solid transparent;
        }
    }
`