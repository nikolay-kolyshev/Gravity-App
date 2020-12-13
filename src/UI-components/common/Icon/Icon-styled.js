import styled from 'styled-components'

export const IconStyled = styled.div`
     width: ${({size}) => size || 32}px;
     height: ${({size}) => size || 32}px;
                 
     img {
        display: block;
        width: 100%;
        height: 100%;
     }
`
