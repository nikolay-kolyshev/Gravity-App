import React, {useEffect} from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {Button} from "../../../common/Buttons/Button";
import {useToasts} from 'react-toast-notifications'
import {QuizPageInputStyled} from "./QuizPageInput-styled";
import InputBox from "../../../common/InputBox/InputBox";
import {ButtonWrapper} from "../../Quiz-styled";

export default ({handlePageNext, error, currentValue, currentKey, handleChange, title, inputConfig}) => {

    useEffect(() => {
        if (!!error)
            addToast(error, {
                appearance: 'error',
                autoDismiss: true,
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
                    onChange={handleChange}
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

