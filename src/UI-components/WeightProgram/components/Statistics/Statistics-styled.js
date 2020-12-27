import styled from "styled-components"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {ImageInDiv} from "../../../../styles/common-components/Images";
import Progress from 'react-progressbar'
import {Step} from "react-step-progress-bar";

export const StatisticsStyled = styled.div`
    
`

export const CountStyled = styled(Typography)`
    font-size: 36px;
    color: ${({color, theme}) => color || theme.colors.secondary};
    
    ${({postfix, theme}) =>
      !!postfix &&
        `
            &:after{
                content: "${postfix}";
                font-size: 24px;
            }            
        `    
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CountIcon = styled.div`
    ${ImageInDiv};
    width: 24px;
    height: 24px;
`

export const ProgressIndexWeightStyled = styled.div`
    .RSPBstep {
        left: ${({indexPercent}) => indexPercent}%;
    }
`

export const ProgressIndexWeightMarker = styled.div`
    width: 2px;
    height: 12px;
    background-color: white;
    position: relative;
`

export const ProgressIndexWeightMarkerIcon = styled.div`
    
    position: absolute;
    left: -7px;
    bottom: 12px;
    width: 16px;
    margin-bottom: 2px;
    
    img {
        ${ImageInDiv}
    }
`

export const Glass = styled.div`
    img {
        ${ImageInDiv};
        width: 24px;
        height: 32px;
    }
`

