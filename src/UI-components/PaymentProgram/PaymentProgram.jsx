import MainWrapper from "../MainWrapper/MainWrapper";
import React, {useState} from "react";
import PlanTimeLeft from "./components/PlanTimeLeft";
import ProgramExpirience from './components/ProgramExpirience'
import UserReviews from './components/UsersReviews'
import PlanCeil from "./components/PlanCeil";
import PaymentRefound from "./components/PaymentRefound";
import StartNow from "./components/StartNow";
import OurEmail from "./components/OurEmail";
import Footer from "../Footer/Footer";
import Accordion from "./components/Accordion";

export default () => {

    return (
        <div>
            <MainWrapper title="Начни меняться прямо сейчас">

                <PlanTimeLeft endDate={Date.now() + 592000} style={{marginBottom: "30px"}}/>
                <PlanCeil style={{marginBottom: "44px"}}/>
                <ProgramExpirience ClientName={"Louis"} ClientProgress={"-4kg"}/>
                <UserReviews/>
                <Accordion style={{marginBottom: "111px"}}/>
                <PaymentRefound style={{marginBottom: "83px"}}/>
                <StartNow style={{marginBottom: "52px"}}/>
                <OurEmail style={{marginBottom: "42px"}}/>
            </MainWrapper>
            <Footer style={{margin: "0 -24px -19px"}}/>
        </div>

    )

}