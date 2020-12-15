import React from "react"
import {
    CardButtonGenderStyled,
    CardButtonStyled,
    CardGoalStyled,
    IconStyled, ImageGenderWrapper,
    StatusPictureStyled,
    Title, TitleWrapper
} from "./Cards-styled";
import CheckmarkSmall from './../../../assets/images/other/Checkmark_small.png';
import {EmojiList} from "./Emoji/EmojiList";
import malePhoto from "../../../../src/assets/images/other/male.png"
import femalePhoto from "../../../../src/assets/images/other/female.png"
import {LayoutFlex} from "../../../styles/common-components/Layout";

export const CardButton = ({isActive, icon, title, emojiArray, children}) => (

    <CardButtonStyled isActive={isActive} icon={icon}>
        {icon && (<IconStyled size={32} icon={icon}/>)}
        <div>
            <div>
                <Title>{title}</Title>
            </div>
            <div>
                {children}
                {!!emojiArray && <EmojiList emojiArray={emojiArray}/>}
            </div>
        </div>
       {isActive && (<StatusPictureStyled icon={CheckmarkSmall}/>)}
    </CardButtonStyled>

)

export const CardButtonGender = ({isActive, icon, title, emojiArray, gender, ...restProps}) => (

    <CardButtonGenderStyled isActive={isActive} icon={icon} {...restProps}>
        <div style={{padding: "20px 15px 0 15px"}}>
            {isActive && (<StatusPictureStyled icon={CheckmarkSmall}/>)}
        </div>
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


export const CardGoal = ({icon, children}) => (
    <CardGoalStyled>
        <IconStyled icon={icon}/>
        <div>
            {children}
        </div>
    </CardGoalStyled>
)