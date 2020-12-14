import React from 'react'
import {EmojiListStyled} from './EmojiList-styled'
import {Picture} from "../../Picture/Picture";

export const EmojiList = ({icon, EmojiArray}) =>(
    <EmojiListStyled icon={icon}>
        {EmojiArray.map(function(child){
            return(<Picture icon={child}></Picture>)})
        }

    </EmojiListStyled>
)
