import React from 'react'
import {Img, UserReviewStyled, UsersReviewsStyled} from "../PaymentProgram-styled";
import {Typography} from "../../../styles/common-components/Typography-styled";
import UserProfilePic1 from '../../../assets/images/other/ICON_INTAGRAMM_PROFILE_PICTURE_1.png';
import UserProfilePic2 from '../../../assets/images/other/ICON_INTAGRAMM_PROFILE_PICTURE_2.png';
import UserProfilePic3 from '../../../assets/images/other/ICON_INTAGRAMM_PROFILE_PICTURE_3.png';
import InstagramLogo from '../../../assets/images/other/Instagram_logo.png'
const UserReview = ({name,profilePicture,children,...restProps}) =>(
    <UserReviewStyled {...restProps}>
        <div style={{paddingBottom:"16px"}}>
            <div>
                <Img borderRadius={"20px"} size={"40px"} src={profilePicture}/>
                <Typography style={{paddingLeft:"10px"}}>
                    @{name}
                </Typography>

            </div>
            <Img borderRadius={"0px"}size={"24px"} src={InstagramLogo}/>
        </div>
        {children}
    </UserReviewStyled>
)
export default () => (
    <UsersReviewsStyled>
        <Typography style={{letterSpacing:"-5%",marginBottom:"15px"}} size={"24px"} weight={"500"}>
            Отзывы пользователей
            в соцсетях
        </Typography>
        <UserReview name={"annalen"} profilePicture={UserProfilePic1} gapLine={true}>
            Я раньше всегда бросала тренировки🙈!
            а здесь очень помогли советы психолога!
            Все с примерами из жизни.
            Сбросила 5 кг😍 буду работать дальше!💪🏻 спасибо!🌸
        </UserReview>
        <UserReview name={"artanid"} profilePicture={UserProfilePic2} gapLine={true}>
            Я вот вообще анти-спорт!
            Подкупили простые короткие тренировки.
            Сначала даже показалось слишком просто ))
            Но потом как-то постепенно нагрузка увеличивалась,
            при этом времени занимало вообще не много.
            Результат - смотрите сами😜👇
        </UserReview>
        <UserReview name={"kostyadeg"} profilePicture={UserProfilePic3}>
            Тренировки классные,
            но больше всего мне понравились советы
            и лайфхаки по питанию!🥑🍅🍆 Обычно дают
            какие-то правила, а применить их не получается в
            итоге.. а здесь очень много примеров, все вроде
            просто и очевидно.
        </UserReview>
    </UsersReviewsStyled>
)