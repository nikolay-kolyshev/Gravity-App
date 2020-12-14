import React from 'react'
import {EmojiListStyled} from './EmojiList-styled'
import {Picture} from "../../Picture/Picture";
export const EmojiList = ({EmojiArray}) =>(
    <EmojiListStyled>
        {EmojiArray.map(function(child){
            return(<Picture icon={child}></Picture>)})
        }
    </EmojiListStyled>
)
