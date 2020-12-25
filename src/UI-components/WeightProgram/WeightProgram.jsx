import React from "react"
import MainWrapper from "../MainWrapper/MainWrapper";
import Goals from "./components/Goals/Goals";
import Statistics from "./components/Statistics/Statistics";
import "react-step-progress-bar/styles.css";
import ProgressActive from "./components/Statistics/ProgressActive";
import {ICON_COUNT_PREFIX_FIRE, ICON_COUNT_PREFIX_STEPS} from "../../constans/icons";
import ProgressIndexWeight from "./components/Statistics/ProgressIndexWeight";
import Glasses from "./components/Statistics/Glasses";
import Problems from "./components/Problems/Problems";
import GraphResults from "./components/GraphResults/GraphResults";

export default () => {


    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 10);
        gradient.addColorStop(0, 'rgba(250,174,50,1)');
        gradient.addColorStop(1, 'rgba(250,174,50,0)');

        return {
            labels: ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
            datasets: [
                {
                    fill: "start",
                    backgroundColor : gradient, // Put the gradient here as a fill color
                    borderColor : "#ff6c23",
                    borderWidth: 2,
                    pointColor : "#fff",
                    pointStrokeColor : "#ff6c23",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ff6c23",
                    data : [25.0,32.4,22.2,39.4,34.2,22.0,23.2,-24.1,20.0,-18.4,19.1,17.4]
                }
            ]
        }
    }

    const options = {
        responsive: true,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>"
    };

    return (
            <MainWrapper title="Твоя программа по снижению веса готова!">

                <Goals style={{marginBottom: "56px"}}/>

                <Statistics
                    title="Твой индекс массы тела"
                    count="37,4"
                    style={{marginBottom: "50px"}}
                >
                    <div style={{margin: "30px 0 30px"}}>
                        Обнаружено повышенное жирдяйство
                    </div>
                    <ProgressIndexWeight
                        filledBackground="linear-gradient(90deg, #4AE601 9.9%, #F4C51A 41.15%, #FC5B3F 83.33%)"
                        startValue={10}
                        endValue={60}
                        indexPercent={70}
                    />
                </Statistics>
                <Statistics
                    title="Твоя норма воды в день"
                    count="4,2"
                    countPostfix="L"
                    color="#2F8FFF"
                    style={{marginBottom: "50px"}}
                >
                    <Glasses count={10} value={9}/>
                </Statistics>
                <Statistics
                    title="Твоя необходимая активность на день"
                    disabledDevider
                >
                    <ProgressActive
                        filledBackground="linear-gradient(90deg, #FFF72B -21.32%, #FF5C00 97.84%"
                        color="#FF7205"
                        count={100}
                        countPrefix={ICON_COUNT_PREFIX_FIRE}
                        percent={60}
                        text="Ккал сжечь"
                        style={{marginTop: "22px"}}
                    />
                    <ProgressActive
                        filledBackground="linear-gradient(90deg, #5D4FFF -72.63%, #D298FF 100%)"
                        color="#7B6EEC"
                        count={6000}
                        countPrefix={ICON_COUNT_PREFIX_STEPS}
                        percent={60}
                        text="Шагов пройти"
                        style={{marginTop: "22px"}}
                    />
                </Statistics>

                <Problems/>



        </MainWrapper>
    )

}