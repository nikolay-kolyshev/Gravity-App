import React, {useEffect} from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {Button} from "../../../common/Buttons/Button";
import {useToasts} from 'react-toast-notifications'
import {QuizPageInputStyled} from "./QuizPageInput-styled";
import InputBox from "../../../common/InputBox/InputBox";
import {ButtonWrapper} from "../../../../App-styled";

export default ({handlePageNext, error, currentValue, currentKey, handleChange, title, setFieldValue, inputConfig}) => {

    useEffect(() => {
        if (!!error)
            addToast(error, {
                appearance: 'error',
                autoDismiss: true,
                autoDismissTimeout:1500
            })
    }, [error])

    const { addToast } = useToasts()

    return (
            <QuizPageInputStyled>
                <TypographyTitle align="center" style={{marginTop:"20px",marginBottom:"60px"}}>
                    {title}
                </TypographyTitle>
                <InputBox
                    name={currentKey}
                    value={currentValue}
                    setFieldValue={setFieldValue}
                    currentKey={currentKey}
                    {...inputConfig}
                />
                <ButtonWrapper>
                    <Button
                        type="button"
                        isActive={!error}
                        onClick={() => handlePageNext()}
                    >
                        Next
                    </Button>
                </ButtonWrapper>
            </QuizPageInputStyled>
    )

}

