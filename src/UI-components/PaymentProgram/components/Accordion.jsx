import React, {useEffect, useRef, useState} from "react"
import {
    AccordionContainer,
    AccordionContent,
    AccordionHeading,
    AccordionIconWrapper,
    AccordionItemStyled
} from "../PaymentProgram-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";
import {ICON_ACCORDION_PLUS} from "../../../constans/icons";
import {ICON_ACCORDION_MINUS} from "../../../constans/icons";
import useActiveItemsId from "../hooks/useActiveItemsId";

export default ({...restProps}) => {

    const [activeItemsId, toggleItemsActive] = useActiveItemsId([])

    const accordionItemList = [
        {
            id: 1,
            title: "Сколько времени нужно на занятия?",
            description: `Всего около 2-3 часов в неделю, включая время на тренировки,
                        чтение материалов и выполнение заданий.
                        Ты также сможешь увеличить время тренировок по своему желанию с
                        помощью наших бонусных воркаутов.`
        },
        {
            id: 2,
            title: "Сколько времени нужно на занятия?",
            description: `Всего около 2-3 часов в неделю, включая время на тренировки,
                        чтение материалов и выполнение заданий.
                        Ты также сможешь увеличить время тренировок по своему желанию с
                        помощью наших бонусных воркаутов.`
        },
        {
            id: 3,
            title: "Сколько времени нужно на занятия?",
            description: `Всего около 2-3 часов в неделю, включая время на тренировки,
                        чтение материалов и выполнение заданий.
                        Ты также сможешь увеличить время тренировок по своему желанию с
                        помощью наших бонусных воркаутов.`
        },
        {
            id: 4,
            title: "Сколько времени нужно на занятия?",
            description: `Всего около 2-3 часов в неделю, включая время на тренировки,
                        чтение материалов и выполнение заданий.
                        Ты также сможешь увеличить время тренировок по своему желанию с
                        помощью наших бонусных воркаутов.`
        },
    ]

    const accordionItemElements = accordionItemList.map(
        ({id, title, description}) => {
            return (
                <AccordionItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    activeItemsId={activeItemsId}
                    toggleItemsActive={toggleItemsActive}
                    style={{marginBottom: "16px"}}
                />
            )
        }

    )

    return (
        <div {...restProps}>
            {accordionItemElements}
        </div>
    )

}


const AccordionItem = ({id, title, description, activeItemsId, toggleItemsActive, ...restProps}) => {

    const isActive = activeItemsId.includes(id)

    const contentRef = useRef(null)
    const [contentHeight, setContentHeight] = useState("0px")

    useEffect(() => {
        setContentHeight(contentRef.current.scrollHeight+"px")
    },[isActive])

    return (
        <AccordionItemStyled {...restProps}>

            <AccordionHeading isActive={isActive}>
                <Typography weight={700}>
                    {title}
                </Typography>
                <AccordionIconWrapper onClick={() => toggleItemsActive(id)}>
                    <img src={isActive ? ICON_ACCORDION_MINUS : ICON_ACCORDION_PLUS}/>
                </AccordionIconWrapper>
            </AccordionHeading>

            <AccordionContent ref={contentRef} isActive={isActive} contentHeight={contentHeight}>
                {description}
            </AccordionContent>

        </AccordionItemStyled>
    )

}