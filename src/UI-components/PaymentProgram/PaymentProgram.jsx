import MainWrapper from "../MainWrapper/MainWrapper";
import React from "react";
import PlanTimeLeft from "./components/PlanTimeLeft";

export default () => {

    return (
        <MainWrapper title="Начни меняться прямо сейчас">

            <PlanTimeLeft endDate={Date.now() + 592000}/>

        </MainWrapper>
    )

}