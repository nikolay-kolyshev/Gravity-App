import React from 'react'
import {TypographyTitle} from "../../../../styles/common-components/Typography-styled";
import {CardButton, QuestList} from "../../../common/Cards/Cards";
import {ICON_SMILLING_EVIL, ICON_UMBRELLA, ICON_WOMAN_DANCING, ICON_WOMAN_SUPERHERO} from "../../../../constans/icons";

export default ({setFieldValue, currentValue, handlePageNext, currentKey}) => {

    const handleConfirm = value => {
        setFieldValue([currentKey], value)
        handlePageNext()
    }

    return (
        <div>
            <TypographyTitle align="center" style={{marginTop:"20px",marginBottom:"40px"}}>
                What motivates you the most
            </TypographyTitle>
            <QuestList>
                <CardButton type="button"
                            icon={ICON_WOMAN_SUPERHERO}
                            isActive={currentValue === "Feeling Confident"}
                            title="Feeling Confident"
                            onClick={() => handleConfirm("Feeling Confident")}>
                    I want to look and feel my best
                </CardButton>
                <CardButton type="button"
                            icon={ICON_WOMAN_DANCING}
                            isActive={currentValue === "Looking Amazing"}
                            title="Looking Amazing"
                            onClick={() => handleConfirm("Looking Amazing")}>
                    I want to turn heads at an event
                </CardButton>
                <CardButton type="button"
                            icon={ICON_SMILLING_EVIL}
                            isActive={currentValue === "Getting Revenge"}
                            title="Getting Revenge"
                            onClick={() => handleConfirm("Getting Revenge")}>
                    I want my ex to regret losing me
                </CardButton>
                <CardButton type="button"
                            icon={ICON_UMBRELLA}
                            isActive={currentValue === "Improving Health"}
                            title="Improving Health"
                            onClick={() => handleConfirm("Improving Health")}>
                    I want to prevent health issues
                </CardButton>
            </QuestList>
        </div>
    )

}

