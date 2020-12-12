import React from "react"
import "./styles/fonts.css"
import "normalize.css"
import GlobalStyle from "./styles/global-styled"
import {mainTheme} from "./styles/themes"
import {ThemeProvider} from "styled-components"
import {Typography, TypographyTitle} from "./styles/common-components/Typography";

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle/>
      <Typography>Основной текст</Typography>
      <TypographyTitle fontTitleSizeCustom={24}>Заголовок h1 24px</TypographyTitle>
      <TypographyTitle>Заголовок h1 28px</TypographyTitle>
      <TypographyTitle fontTitleSizeCustom={30}>Заголовок h1 30px</TypographyTitle>
    </ThemeProvider>
  )
}

export default App