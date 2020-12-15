import React from "react"
import "./styles/fonts.css"
import "normalize.css"
import GlobalStyle from "./styles/global-styled"
import {darkTheme, mainTheme} from "./styles/themes"
import {ThemeProvider} from "styled-components"
import {
    Typography,
    TypographySupTitle,
    TypographyTitle,
    TypographyСlassified
} from "./styles/common-components/Typography-styled";
import {CardButton, CardGoal} from "./UI-components/common/Cards/Cards";
import avocadoIcon from "../src/assets/images/icons/avocado_emoji.png"
import broccoliIcon from "../src/assets/images/icons/Broccoli_emoji.png"
import okHandIcon from "../src/assets/images/icons/ok_hand_emoji.png"
import {Button} from "./UI-components/common/Buttons/Button";
import {EmojiList} from './UI-components/common/Cards/Emoji/EmojiList'
import ChoiceGender from "./UI-components/ChoiceGender/ChoiceGender";
import {LayoutInner, LayoutOuter} from "./styles/common-components/Layout";

const emojiArray= [
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
    broccoliIcon,
]

const App = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle/>
            <LayoutOuter>
                <LayoutInner>
                    <ChoiceGender/>
                </LayoutInner>
            </LayoutOuter>
        </ThemeProvider>
    )
}

export default App