import React from "react"
import QuizPageInput from "../common_components/QuizPageInput/QuizPageInput";

export default (title, inputConfig) =>
    props => <QuizPageInput title={title} inputConfig={inputConfig} {...props}/>