import React, {useState} from "react"

export default () => {

    const [activeItemsId, setActiveItemsId] = useState([])

    const toggleItemsActive = id => {
        if (activeItemsId.includes(id)) {
            setActiveItemsId(
                activeItemsId.filter(item => item !== id)
            )
            return
        }
        setActiveItemsId(
            [...activeItemsId, id]
        )
    }

    return [activeItemsId, toggleItemsActive]

}