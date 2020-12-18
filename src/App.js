import React from "react"
import "./styles/fonts.css"
import "normalize.css"
import GlobalStyle from "./styles/global-styled"
import {mainTheme} from "./styles/themes"
import {ThemeProvider} from "styled-components"
import {LayoutInner, LayoutOuter} from "./styles/common-components/Layout";
import Routes from "./UI-components/Routes/Routes";
import Input from './UI-components/common/InputBox/InputBox'
const App = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle/>
            <LayoutOuter>
                <LayoutInner>
                   <Routes/>
                </LayoutInner>
            </LayoutOuter>
        </ThemeProvider>
    )
}

export default App