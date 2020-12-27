import React from "react"
import Statistics from "./Statistics";
import ProgressIndexWeight from "./ProgressIndexWeight";
import Glasses from "./Glasses";
import ProgressActive from "./ProgressActive";
import {ICON_COUNT_PREFIX_FIRE, ICON_COUNT_PREFIX_STEPS} from "../../../../constans/icons";
import MainWrapper from "../../../MainWrapper/MainWrapper";

export default ({...restProps}) => {

    return (
        <div {...restProps}>
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
                style={{marginBottom: "14px"}}
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
        </div>
    )

}