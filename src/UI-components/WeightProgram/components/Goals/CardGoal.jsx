import React, {useState} from "react"
import MainWrapper from "../../../MainWrapper/MainWrapper";
import {TypographyLine} from "../../../../styles/common-components/Typography-styled";
import {CardButton} from "../../../common/Cards/Cards";
import {CardGoalStyled, IconStyled, Title} from "../../../common/Cards/Cards-styled";
import {GoalsStyled} from "./Goals-styled";
import {ICON_APPLE} from "../../../../constans/icons";
import {EmojiList} from "../../../common/Cards/Emoji/EmojiList";

export default ({emojiArray, icon, title, children, ...restProps}) => {

    return (
        <CardGoalStyled {...restProps}>
            {icon && (<IconStyled size={32} icon={icon}/>)}
            <hgroup>
                <Title>{title}</Title>
                <div>
                    {children}
                </div>
                <div>
                    {!!emojiArray && <EmojiList emojiArray={emojiArray}/>}
                </div>
            </hgroup>
        </CardGoalStyled>
    )

}