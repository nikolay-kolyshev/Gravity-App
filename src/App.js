import React from "react"
import "./styles/fonts.css"
import "normalize.css"
import GlobalStyle from "./styles/global-styled"
import {mainTheme} from "./styles/themes"
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
const EmoliArray= [
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
            <Typography>Основной текст</Typography>
            <TypographyTitle fontTitleSizeCustom={24}>Заголовок h1 24px</TypographyTitle>
            <TypographyTitle>Заголовок h1 28px</TypographyTitle>
            <TypographyTitle fontTitleSizeCustom={30}>Заголовок h1 30px</TypographyTitle>
            <TypographyСlassified size="large">Текст по классификации размера</TypographyСlassified>
            <CardButton title="Карточка-вопрос 1" icon={avocadoIcon}>
                <TypographyСlassified>Текст по классификации размера</TypographyСlassified>
            </CardButton>
            <CardButton title="Карточка-вопрос 2" icon={broccoliIcon}>
                <TypographyСlassified>Текст по классификации размера</TypographyСlassified>
            </CardButton>
            <CardButton status={true} title="Карточка-вопрос 3" icon={okHandIcon}>
                <TypographyСlassified>Текст по классификации размера</TypographyСlassified>
            </CardButton>
            <CardButton title="Карточка-вопрос 3" icon={okHandIcon}>
                <TypographyСlassified>Текст по классификации размера</TypographyСlassified>
            </CardButton>
            <CardGoal icon={okHandIcon}>
                Выглядеть <span>привлекательно</span>
            </CardGoal>
            <Button status={true}>
                <TypographyСlassified size={18}>Next</TypographyСlassified>
            </Button>
            <Button >
                <TypographyСlassified size={18}>Next</TypographyСlassified>
            </Button>
            <TypographySupTitle>
                Надзаголовок
            </TypographySupTitle>
            <EmojiList  EmojiArray={EmoliArray}></EmojiList>
            <CardButton icon={okHandIcon} title="Карточка-Emoji">
                <TypographyСlassified>Текст по классификации размера</TypographyСlassified>
                <EmojiList icon={CardButton.icon} EmojiArray={EmoliArray}></EmojiList>
            </CardButton>
        </ThemeProvider>
    )
}

export default App