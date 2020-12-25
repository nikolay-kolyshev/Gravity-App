import React from "react"
import {Glass} from "./Statistics-styled";
import {LayoutFlex} from "../../../../styles/common-components/Layout";
import {ICON_EMAIL, ICON_GLASS_DISABLED, ICON_GLASS_ENABLED} from "../../../../constans/icons";

export default ({count, value}) => {

    const glassesElements = new Array(count).fill(count, 0, count).map(
        (item, index) =>
            <Glass>
                <img src={(index <= value) ? ICON_GLASS_ENABLED : ICON_GLASS_DISABLED}/>
            </Glass>
    )

    return (
        <LayoutFlex style={{justifyContent: "space-between", marginTop: "24px"}}>
            {glassesElements}
        </LayoutFlex>
    )

}