import styled from 'styled-components'

export const PictureStyled = styled.div`
     min-width: ${({size}) => size || 32}px;
     min-height: ${({size}) => size || 32}px;        
     img {
        display:block;
        width: 100%;
        
     }
`