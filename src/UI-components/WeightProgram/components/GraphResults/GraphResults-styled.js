import styled from "styled-components"
import graphLines from "../../../../assets/images/weight_program/graph-results/grid.svg";
import {ImageInDiv} from "../../../../styles/common-components/Images";

export const GraphResultsStyled = styled.div`
    width: 100%;
    border-radius: 12px;
    background: linear-gradient(125.26deg, rgba(255,188,128,.2), rgba(199,240,34,.2));
    padding: 32px 22px;
`

export const GraphTitle = styled.div`
    text-align: center;
`

export const GraphWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
`

export const HorizontalCrossLines = styled.div`
    height: 125px;
    width: 100%;
    img {
        ${ImageInDiv}
    }
`

export const HorizontalCrossCount = styled.div`
    margin-left: 16px;
    display: flex;
    justify-content: flex-end;
`

export const HorizontalCrossCounts = styled.div`
    height: 142px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Graph = styled.div`
    padding-top: 9px;
    position: relative;
    overflow: hidden;
`

export const GraphLineStyled = styled.div`
    position: absolute;
    top: 14px;
    left: 9px;
    width: 248px;
        
    img {
        display: block;
        height: 77px;
        width: 100%;
    }
`

export const GraphBadge = styled.div`
    position: absolute;
    top: ${({direction, graphType}) => {
       switch (graphType) {
               case "Up": return direction === "curr" ? "30px" : "-36px"
               case "Down": return direction === "curr" ? "-36px" : "30px"
               case "Flat": return direction === "curr" ? "0px" : "0px"
       }
    }};
    left: ${({direction}) => direction === "curr" ? "-22px" : "131px"};
    &:after{
        content: "${({weight}) => weight} кг";
        width: 100%;
        height: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        position: absolute;
        top: 6px;
        font-size: 14px;
        font-weight: bold;
    }
`

export const VerticalCross = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
