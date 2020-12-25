import React from "react"
import "./styles/fonts.css"
import "normalize.css"
import GlobalStyle from "./styles/global-styled"
import {mainTheme} from "./styles/themes"
import {ThemeProvider} from "styled-components"
import {LayoutInner, LayoutOuter} from "./styles/common-components/Layout";
import { ToastProvider } from 'react-toast-notifications'
import Problems from './UI-components/WeightProgram/components/Problems/Problems'
import Routes from "./UI-components/Routes/Routes";
const App = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <ToastProvider>
                <GlobalStyle/>
                <LayoutOuter>
                    <LayoutInner>
                        <Routes/>
                    </LayoutInner>
                </LayoutOuter>
            </ToastProvider>
        </ThemeProvider>
    )}

export default App