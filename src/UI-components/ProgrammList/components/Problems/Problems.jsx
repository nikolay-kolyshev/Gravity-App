import React from 'react'
import {ProblemStyled, ProblemWrapper} from "./Problem-styled";
import {CardProblem} from "../../../common/Cards/Cards";
import female_belly from "../../../../assets/images/other/problem_belly.png"
import female_fanny from "../../../../assets/images/other/female_fanny.png"
import female_legs from "../../../../assets/images/other/legs.png"
import female_strethching from "../../../../assets/images/other/stretching.png"
import {CardProblemImage} from "../../../common/Cards/Cards-styled";
import {TypographyTitle, TypographyСlassified} from "../../../../styles/common-components/Typography-styled";
export default () =>(
    <ProblemStyled>
        <TypographyTitle style={{fontSize:"24px",textAlign:"left",marginBottom:"24px"}}>
            Работа над проблемными зонами
        </TypographyTitle>
        <TypographyСlassified style={{fontSize:"16px",fontWeight:"bold",textAlign:"left"}}>
            46 тренировок
        </TypographyСlassified>
        <TypographyСlassified style={{fontSize:"16px",marginBottom:"28px",textAlign:"left"}}>
            для точного удара в цель
        </TypographyСlassified>
    <ProblemWrapper>
        <CardProblem style={{background: "linear-gradient(73.91deg, #FFB0C0 16.26%, #BF2578 231.41%)"}} time={"10 min"} title={"Плоский живот"}>
            <CardProblemImage style={{
                width: "91.23px",
                height:"235.66px",
                left:   "98px",
                bottom: "0px"
            }}>
                <img src={female_belly}/>
            </CardProblemImage>
        </CardProblem>
        <CardProblem style={{background: "linear-gradient(115.98deg, #F0BE3E 1.33%, #EFEA7B 78.72%)"}} time={"10 min"} title={"Попа как орех"}>
            <CardProblemImage style={{
                width: "142.08px",
                height: "197.55px",
                left: "60px",
                top:"-20px"
            }}>
                <img src={female_fanny}/>
            </CardProblemImage>
        </CardProblem>
        <CardProblem style={{background: "linear-gradient(86.47deg, #9EB9FF -15.86%, #9868FF 102.89%)"}} time={"10 min"} title={"Растяжка"}>
            <CardProblemImage style={{
                width: "126.47px",
                height: "272.98px",
                left: "70px",
                top:"-40px"
            }}>
                <img src={female_strethching}/>
            </CardProblemImage>
        </CardProblem>
        <CardProblem style={{background: "linear-gradient(299.23deg, #44FFC7 3.54%, #6BCCFF 96.62%)"}} time={"10 min"} title={"Стройные ноги"}>
            <CardProblemImage style={{
                width: "123.02px",
                height: "299.25px",
                left: "50px",
                top:"-80px"
            }}>
                <img src={female_legs}/>
            </CardProblemImage>
        </CardProblem>
    </ProblemWrapper>
    </ProblemStyled>
)