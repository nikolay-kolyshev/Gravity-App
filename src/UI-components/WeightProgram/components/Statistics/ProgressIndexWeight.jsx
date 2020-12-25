import React from "react"
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {ProgressBar, Step} from "react-step-progress-bar";
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {ProgressIndexWeightMarker, ProgressIndexWeightMarkerIcon, ProgressIndexWeightStyled} from "./Statistics-styled";
import {ICON_INDEX_WEIGHT_MARKER} from "../../../../constans/icons";

export default ({filledBackground, startValue, endValue, indexPercent, ...restProps}) => {

    const valuesElements = [startValue, (endValue-startValue)/2, endValue].map(
        item =>
            <Typography size={"11px"} color={"rgba(0, 0, 0, 0.5)"}>
                {item}
            </Typography>
    )

    return (
        <ProgressIndexWeightStyled
            indexPercent={indexPercent}
            {...restProps}
        >
            <ProgressBar
                height={12}
                filledBackground={filledBackground}
                percent={100}
            >
                <Step>
                    {() => (
                        <ProgressIndexWeightMarker>
                            <ProgressIndexWeightMarkerIcon>
                                <img src={ICON_INDEX_WEIGHT_MARKER}/>
                            </ProgressIndexWeightMarkerIcon>
                        </ProgressIndexWeightMarker>
                    )}
                </Step>
            </ProgressBar>
            <LayoutFlex style={{justifyContent: "space-between", marginTop: "5px"}}>
                {valuesElements}
            </LayoutFlex>
        </ProgressIndexWeightStyled>
    )

}