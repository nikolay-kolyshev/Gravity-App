import React from 'react'
import SuperGirl from '../../../../assets/images/icons/superGirl.png'
import Tango from '../../../../assets/images/icons/Tango.png'
import Devil from '../../../../assets/images/icons/Devil.png'
import Health from '../../../../assets/images/icons/Health.png'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";

export default ({setFieldValue, currentValue, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle style={{marginTop:"20px",marginBottom:"60px",textAlign:"center"}}>
                What motivates you the most
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={SuperGirl}
                            isActive={currentValue === "Feeling Confident"}
                            title="Feeling Confident"
                            onClick={() => handleConfirm("Feeling Confident")}>
                    I want to look and feel my best
                </CardButton>
                <CardButton type="button"
                            icon={Tango}
                            isActive={currentValue === "Looking Amazing"}
                            title="Looking Amazing"
                            onClick={() => handleConfirm("Looking Amazing")}>
                    I want to turn heads at an event
                </CardButton>
                <CardButton type="button"
                            icon={Devil}
                            isActive={currentValue === "Getting Revenge"}
                            title="Getting Revenge"
                            onClick={() => handleConfirm("Getting Revenge")}>
                    I want my ex to regret losing me
                </CardButton>
                <CardButton type="button"
                            icon={Health}
                            isActive={currentValue === "Improving Health"}
                            title="Improving Health"
                            onClick={() => handleConfirm("Improving Health")}>
                    I want to prevent health issues
                </CardButton>
            </QuestList>
        </div>
    )

}

