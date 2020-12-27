import React from "react"
import {Typography} from "../../../../styles/common-components/Typography-styled";
import {LessonIcon, LessonPlanStyled, LessonsGrid, Review} from "./LessonPlan-styled";
import LessonItem from "./LessonItem";
import {
    ICON_BITCEPS,
    ICON_GLASS_DISABLED,
    ICON_LESSONS_CALENDAR, ICON_LESSONS_PLUS,
    ICON_LESSONS_TIME,
    ICON_LESSONS_TRAINING, ICON_LESSONS_WEIGHER
} from "../../../../constans/icons";
import {Devider} from "../../WeightProgram-styled";

export default ({...restProps}) => {

    const lessons = [
        {
            icon: ICON_LESSONS_CALENDAR,
            count: 24,
            text: "тренировки"
        },
        {
            icon: ICON_LESSONS_TIME,
            count: 30,
            text: "тренировки"
        },
        {
            icon: ICON_LESSONS_TRAINING,
            count: 65,
            text: "тренировки"
        },
        {
            icon: ICON_LESSONS_WEIGHER,
            count: 5,
            postfix: "кг",
            text: "сбросишь до ноября"
        },
    ]

    const lessonsElements = lessons.map(
        lesson =>
            <LessonItem
                icon={lesson.icon}
                count={lesson.count}
                text={lesson.text}
                postfix={lesson.postfix}
            />
    )

    return (

        <LessonPlanStyled {...restProps}>
            <Typography size="24px" weight={500} style={{marginBottom: "32px"}}>
                Твой план занятий
            </Typography>
            <LessonsGrid style={{marginBottom: "30px"}}>
                {lessonsElements}
            </LessonsGrid>
            <Devider style={{marginBottom: "30px"}}/>
            <Review>
                <div style={{marginRight: "10px"}}>
                    <LessonIcon>
                        <img src={ICON_LESSONS_PLUS}/>
                    </LessonIcon>
                </div>
                <div>
                    <Typography size={20} spanWeight={500}>
                        Программа скоректирована, чтобы снизить нагрузку на твои: <span>колени и поясницу</span>
                    </Typography>
                </div>
            </Review>
        </LessonPlanStyled>

    )


}