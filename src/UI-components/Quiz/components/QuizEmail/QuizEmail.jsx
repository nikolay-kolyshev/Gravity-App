import React, {useEffect} from 'react'
import {Typography, TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {ICON_EMAIL} from "../../../../constans/icons";
import {ImageWrapper, QuizEmailStyled} from "./QuizEmail-styled";
import InputMain from "../../../common/InputMain/InputMain";
import {Button} from "../../../common/Buttons/Button";
import {useToasts} from "react-toast-notifications";
import {ButtonWrapper} from "../../../../App-styled";

export default ({currentValue, handlePageNext, currentKey, touched, error, handleChange}) => {

    const { addToast } = useToasts()

    return (
        <QuizEmailStyled>
            <ImageWrapper style={{marginTop:"20px",marginBottom:"20px"}}>
                <img src={ICON_EMAIL}/>
            </ImageWrapper>
            <TypographyTitle style={{marginBottom:"5px"}} align="center">
                Enter your email
            </TypographyTitle>
            <Typography style={{marginBottom:"20px"}} align="center" >
                We’ll email you a copy of your results for convenient access
            </Typography>
            <InputMain
                name={currentKey}
                type="email"
                value={currentValue}
                onChange={handleChange}
                placeholder="example@example.com"
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
        </QuizEmailStyled>
    )

}

