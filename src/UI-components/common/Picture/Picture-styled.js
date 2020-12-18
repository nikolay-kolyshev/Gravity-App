import styled from 'styled-components'

export const PictureStyled = styled.div`
     max-width: ${({size}) => size || 32}px;
     max-height: ${({size}) => size || 32}px;       
     img {
        display: block;  
        width: 100%;
     }
`