import React from "react"
import {CountIcon, CountStyled} from "./Statistics-styled";
import {LayoutFlex} from "../../../../styles/common-components/Layout";

export default ({color, prefix, postfix, children}) => {

    return (
        <LayoutFlex style={{alignItems: "flex-start"}}>
            {
                !!prefix &&
                    <CountIcon>
                        <img src={prefix}/>
                    </CountIcon>
            }
            <CountStyled
                color={color}
                size={36}
                weight={500}
                postfix={postfix}
            >
                {children}
            </CountStyled>
        </LayoutFlex>

    )

}