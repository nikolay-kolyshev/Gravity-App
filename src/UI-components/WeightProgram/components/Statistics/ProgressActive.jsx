import React from "react"
import {CountIcon, CountStyled} from "./Statistics-styled";
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {ProgressBar} from "react-step-progress-bar";
import {Typography} from "../../../../styles/common-components/Typography-styled";
import Count from "./Count";

export default ({filledBackground, color, count, countPrefix, countPostfix, percent, text, ...restProps}) => {

    return (
        <div {...restProps}>
            <LayoutFlex style={{justifyContent: "space-between", marginBottom: "8px"}}>
                <Typography>{text}</Typography>
                {
                    !!count &&
                        <Count
                            prefix={countPrefix}
                            postfix={countPostfix}
                            color={color}
                            size={36}
                            weight={500}
                        >
                            {count}
                        </Count>
                }
            </LayoutFlex>
            <ProgressBar
                height={12}
                filledBackground={filledBackground}
                percent={percent}

            />
        </div>
    )

}