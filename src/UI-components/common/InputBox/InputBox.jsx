import React, {useEffect, useRef, useState} from "react"
import {InputBoxStyled, InputBoxStyledInner} from "./inputBoxStyled";

export default ({postfix, value, type, setFieldValue, currentKey, ...restProps}) => {

    const valuePostfix = `<span class="inputPostfix">${postfix}</span>` || ""

    const [inputValue, setInputValue] = useState(`${value}${valuePostfix}`)
    const [inputSelectionStart, setInputSelectionStart] = useState(value.toString().length)
    const [isIncorrectInputValue, setIsIncorrectInputValue] = useState(false)

    const inputRef = useRef(null);
    const inputTextRef = useRef(inputValue)

    /*useEffect(() => {
        inputRef.current.setSelectionRange(inputSelectionStart,inputSelectionStart)
        setIsIncorrectInputValue(false)
    },[isIncorrectInputValue])*/

    const handleChangeInput = e => {

        let newValue = e.target.value

        const patternAfterEmptyValue = `^<span class="inputPostfix">\\d+sm</span>$`
        const patternValue = `^\\d*<span class="inputPostfix">sm</span>$`

        if (RegExp(patternAfterEmptyValue).test(newValue)) {
            debugger
            const inputNumber = newValue.match(/\d+/g)
            if (inputNumber.length > 0)
                newValue = `${inputNumber[0]}${newValue.replace(inputNumber[0], "")}`
        }

        if (!RegExp(patternValue).test(newValue)) {
            debugger
            const cursorPosition = value.toString().length
            setInputSelectionStart(cursorPosition)
            setIsIncorrectInputValue(true)
            e.currentTarget.innerHTML = inputValue
            return
        }

        debugger

        inputTextRef.current = newValue

        setInputValue(inputTextRef.current)
        setFieldValue(currentKey, newValue.replace(valuePostfix,""))
    }

    return (
        <InputBoxStyled postfix={postfix}>
            <InputBoxStyledInner
                autoFocus
                onChange={handleChangeInput}
                type="text"
                innerRef={inputRef}
                html={inputTextRef.current}
                {...restProps}
            />
        </InputBoxStyled>
    )

}
