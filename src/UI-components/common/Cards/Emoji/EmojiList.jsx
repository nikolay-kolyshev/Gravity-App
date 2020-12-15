import React from 'react'
import {EmojiListStyled} from './EmojiList-styled'
import {Picture} from "../../Picture/Picture";

export const EmojiList = ({emojiArray}) =>(
    <EmojiListStyled>
        {emojiArray.map(function(child){
            return(<Picture icon={child}/>)})
        }
    </EmojiListStyled>
)
