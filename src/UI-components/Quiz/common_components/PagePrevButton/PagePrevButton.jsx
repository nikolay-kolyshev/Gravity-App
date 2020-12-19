import React from 'react'
import BackIcon from "../../../../assets/images/other/back_landing.png"
import {Picture} from "../../../common/Picture/Picture";

export default ({handlePagePrev}) => (
    <button type="button" onClick={handlePagePrev}>
        <Picture icon={BackIcon} style={{maxWidth:"24px",maxHeight:"24px"}}/>
    </button>
)

