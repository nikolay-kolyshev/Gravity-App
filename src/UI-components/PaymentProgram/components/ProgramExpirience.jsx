import React from 'react'
import {ImageProgressWrapper, ProgramExpirienceStyled} from "../PaymentProgram-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";
import ProgressImg from '../../../assets/images/other/progress.png'
export default ({ClientName,ClientProgress}) => (
    <ProgramExpirienceStyled>
        <Typography size={"24px"} color={"white"} weight={"500"}>
                Личный опыт прошедших программу Gravity
        </Typography>
        <ImageProgressWrapper>
                <img src={ProgressImg}/>
        </ImageProgressWrapper>
            <div>
                    <Typography size={"24px"} color={"white"} weight={"500"}>
                            {ClientName}
                    </Typography>
                    <Typography size={"24px"} color={"white"} weight={"500"}>
                            {ClientProgress}
                    </Typography>
            </div>
            <Typography size={"16px"}
                        color={"white"}
                        spanWeight={"700"}
                        style={{margin:"24px 0"}}>
                    После отпуска я начала заниматся.
                    У меня мышцы стало видно! Особенно утром <span>любуюсь ими перед зеркалом!</span>
                    Питаюсь нормально, пью много воды.
            </Typography>
            <Typography size={"16px"}
                        color={"white"}>
                    Но в отпуске ела всё подряд и вино пила 🙊.
                    Буду обязательно продолжать, хочу вернуть добеременную форму.
            </Typography>
    </ProgramExpirienceStyled>
)