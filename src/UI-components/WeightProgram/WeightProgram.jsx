import React from "react"
import MainWrapper from "../MainWrapper/MainWrapper";
import Goals from "./components/Goals/Goals";
import "react-step-progress-bar/styles.css";
import Problems from "./components/Problems/Problems";
import LessonPlan from "./components/LessonPlan/LessonPlan";
import ExerciseAdaptation from "./components/ExerciseAdaptation/ExerciseAdaptation";
import PleasantTrifles from "./components/PleasantTrifles/PleasantTrifles";
import Afterburn from "./components/Afterburn/Afterburn";
import {Typography} from "../../styles/common-components/Typography-styled";
import Advantages from "./components/Advantages/Advantages";
import Music from "./components/Music/Music";
import StatisticsList from "./components/Statistics/StatisticsList";
import Rating from "./components/Rating/Rating";
import GraphResults from "./components/GraphResults/GraphResults";
import {ButtonWrapper} from "../../App-styled";
import {Button} from "../common/Buttons/Button";

export default () => {

    return (
            <MainWrapper title="Твоя программа по снижению веса готова!">

                <Goals style={{marginBottom: "56px"}}/>
                <GraphResults currWeight={20} goalWeight={1} style={{marginBottom: "69px"}}/>
                <StatisticsList style={{marginBottom: "67px"}}/>
                <LessonPlan style={{marginBottom: "70px"}}/>

                <div style={{marginBottom: "64px"}}>
                    <Typography
                        size="32px"
                        weight={500}
                        style={{marginBottom: "42px"}}
                        lineHeight="32px"
                    >
                        Вся программа доступна в приложении Gravity
                    </Typography>
                    <Rating style={{marginBottom: "40px"}}/>
                    <Advantages/>
                </div>

                <div style={{marginBottom: "186px"}}>
                    <Typography
                        size="32px"
                        weight={500}
                        style={{marginBottom: "42px"}}
                        lineHeight="32px"
                    >
                        Почему с нами остаются
                    </Typography>
                    <Afterburn style={{marginBottom: "14px"}}/>
                    <Problems style={{marginBottom: "14px"}}/>
                    <ExerciseAdaptation style={{marginBottom: "14px"}}/>
                    <Music style={{marginBottom: "67px"}}/>
                    <PleasantTrifles/>
                </div>

                <ButtonWrapper>
                    <Button
                        isActive={true}
                        type="button"
                        onClick={() => {}}
                    >
                        Получить всю программу
                    </Button>
                </ButtonWrapper>

        </MainWrapper>
    )

}