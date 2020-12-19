import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import InputBox from "../../../common/InputBox/InputBox";
import {ButtonWrapper, QuizAgeStyled} from "./QuizAge-styled";
import {Button} from "../../../common/Buttons/Button";
import {ErrorMessage} from "formik";

export default ({setFieldValue, handlePageNext, error, currentValue, currentKey, handleChange, handleBlur}) => {

    debugger

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
            <QuizAgeStyled>
                <TypographyTitle style={{marginTop:"20px",marginBottom:"60px",textAlign:"center"}}>
                    How old are you?
                </TypographyTitle>
                <InputBox
                    name={currentKey}
                    type="number"
                    max={90}
                    value={currentValue}
                    onChange={handleChange}
                />
                <ButtonWrapper>
                    <Button
                        type="button"
                        isActive={true}
                        onClick={() => handlePageNext()}
                    >
                        Next
                    </Button>
                </ButtonWrapper>
                <ErrorMessage name={currentKey}/>
                <div>{error}</div>
            </QuizAgeStyled>
    )

}

