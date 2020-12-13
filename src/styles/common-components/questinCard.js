import styled from 'styled-components'

const infoCard =  props => ({
    width: props.theme.verbalQuestionButton.width,
    height: props.theme.verbalQuestionButton.height,
    borderRadius: props.theme.verbalQuestionButton.borderRadius,
    border: props.theme.verbalQuestionButton.border,
    active: props.theme.verbalQuestionButton.activeBorder,
})
 export const QuestionCard = styled.div.attrs(infoCard)`
 width: ${props => props.width}px;
 height: ${props => props.height}px;
 border-radius: ${props =>props.borderRadius}px;
 display: flex;
 justify-content:center;
 align-items:center;
 border: ${props =>props.border};
 transition: border 0.25s;
 &:hover{
    border: ${props =>props.active};
 }
 
 `
