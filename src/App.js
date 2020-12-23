import React from "react"
import "./styles/fonts.css"
import "normalize.css"
import GlobalStyle from "./styles/global-styled"
import {mainTheme} from "./styles/themes"
import {ThemeProvider} from "styled-components"
import {LayoutInner, LayoutOuter} from "./styles/common-components/Layout";
import Routes from "./UI-components/Routes/Routes";
import { ToastProvider } from 'react-toast-notifications'
import Graph from './UI-components/common/Graphs/Graph'
const App = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <ToastProvider>
                <GlobalStyle/>
                <LayoutOuter>
                    <LayoutInner>
                        <Graph/>
                    </LayoutInner>
                </LayoutOuter>
            </ToastProvider>
        </ThemeProvider>
    )
}

export default App