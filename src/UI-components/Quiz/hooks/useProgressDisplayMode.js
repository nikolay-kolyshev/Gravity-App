import {useEffect, useState} from "react"

export const useProgressDisplayMode = (stringsNumber, durationStep = 500, callback = null) => {

    const [progressDisplayMode, setProgressDisplayMode] = useState(false)

    useEffect(() => {
        if (progressDisplayMode)
            setTimeout(() => {
                setProgressDisplayMode(false)
                {!!callback && callback()}
            }, stringsNumber*durationStep + durationStep + 300)
    }, [progressDisplayMode])

    return [progressDisplayMode, setProgressDisplayMode]

}