import React from "react"
import {
    CardButtonGenderStyled,
    CardButtonStyled,
    CardGoalStyled, CardListStyled, IconConfirmWrapper,
    IconStyled, ImageGenderWrapper,
    IsActivePictureStyled,
    Title, TitleWrapper,
} from "./Cards-styled";
import CheckmarkSmall from './../../../assets/images/other/Checkmark_small.svg';
import {EmojiList} from "./Emoji/EmojiList";
import malePhoto from "../../../../src/assets/images/other/male.png"
import femalePhoto from "../../../../src/assets/images/other/female.png"
import {LayoutFlex} from "../../../styles/common-components/Layout";
import {TypographyTitle} from "../../../styles/common-components/Typography-styled";

export const CardButton = ({ContentWrapper, isActive, icon, title, emojiArray, children, ...restProps}) => (
    <CardButtonStyled ContentWrapper={ContentWrapper} isActive={isActive} icon={icon} isSimple={!icon && !emojiArray} {...restProps}>
        <div>
            {icon && (<IconStyled size={32} icon={icon}/>)}
            <hgroup>
                <Title>{title}</Title>
                <div>
                    {children}
                </div>
                <div>
                    {!!emojiArray && <EmojiList emojiArray={emojiArray}/>}
                </div>
            </hgroup>
        </div>
        <div>
            {isActive && (!!icon || !!emojiArray) && (<IsActivePictureStyled icon={CheckmarkSmall}/>)}
        </div>
    </CardButtonStyled>
)

export const CardButtonGender = ({isActive, icon, title, emojiArray, gender, ...restProps}) => (
    <CardButtonGenderStyled isActive={isActive} icon={icon} {...restProps}>
        <IconConfirmWrapper>
            {isActive && (<IsActivePictureStyled icon={CheckmarkSmall}/>)}
        </IconConfirmWrapper>
        <ImageGenderWrapper>
            <img src={gender === "female" ? femalePhoto : malePhoto}/>
        </ImageGenderWrapper>
        <TitleWrapper>
            <LayoutFlex width="100%" height="100%" horizontalCenter={true} verticalCenter={true}>
                <Title>{title}</Title>
            </LayoutFlex>
        </TitleWrapper>
    </CardButtonGenderStyled>
)

export const QuestList = ({children}) =>(
    <CardListStyled>
        {children}
    </CardListStyled>
)
export const CardGoal = ({icon, children}) => (
    <CardGoalStyled>
        <IconStyled icon={icon}/>
        <div>
            {children}
        </div>
    </CardGoalStyled>
)