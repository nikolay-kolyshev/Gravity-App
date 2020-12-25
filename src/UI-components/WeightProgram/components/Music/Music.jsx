import React from 'react'
import {CardMusicStyled, MusicStyled,CardMusicTypeStyled,CardsMusicWrapper} from "../../../common/Cards/Cards-styled";
import {Typography} from "../../../../styles/common-components/Typography-styled";
import Music from "./Music";
import Warm_up from "../../../../assets/images/other/Warm_up.png";
import Work_out from "../../../../assets/images/other/Work_out.png";
import Rest from "../../../../assets/images/other/Rest.png";
import Calm_down from "../../../../assets/images/other/Calm_down.png";


export default () => (
    <MusicStyled>
        <Typography weight={600} style={{letterSpacing: "-0.05em",whiteSpace: "nowrap",marginLeft:"7px",fontSize:"24px"}}>
            Музыка подстраивается<br/>
            под темп
        </Typography>
        <Typography style={{marginLeft:"7px"}}>
            Алгоритм Mubert создаёт мотивирующую и уникальную музыку для каждой тренировки
        </Typography>

        <CardsMusicWrapper>

            <CardMusicTypeStyled>
                <CardMusicStyled >
                    <img src={Warm_up}/>
                </CardMusicStyled>
                <Typography style={{whiteSpace: "nowrap"}} size={"15px"}>Warm-up</Typography>
                <Typography size={"13px"} color={"#2F8FFF"}>Light <br/>Electro</Typography>
            </CardMusicTypeStyled>

            <CardMusicTypeStyled>
                <CardMusicStyled >
                    <img src={Work_out}/>
                </CardMusicStyled>
                <Typography style={{whiteSpace: "nowrap"}} size={"15px"}>Workout</Typography>
                <Typography size={"13px"} color={"#FFC700"}>Heavy <br/>Electro</Typography>
            </CardMusicTypeStyled>

            <CardMusicTypeStyled>
                <CardMusicStyled>
                    <img src={Rest}/>
                </CardMusicStyled>
                <Typography style={{whiteSpace: "nowrap"}} size={"15px"}>Rest</Typography>
                <Typography size={"13px"} color={"#FF7144"}>Deep <br/>House</Typography>
            </CardMusicTypeStyled>

            <CardMusicTypeStyled>
                <CardMusicStyled>
                    <img src={Calm_down}/>
                </CardMusicStyled>
                <Typography style={{whiteSpace: "nowrap"}} size={"15px"}>Calm down</Typography>
                <Typography size={"13px"} color={"#A480FF"}>Relax <br/>Ambient</Typography>
            </CardMusicTypeStyled>

        </CardsMusicWrapper>
    </MusicStyled>
)

