import {useEffect, useState} from "react";

export default (initialValues, currentValues) => {

    const [valuesMap, setValuesMap] = useState(initialValues)

    useEffect(() => {
        if (!!currentValues && currentValues.length > 0)
            setValuesMap(new Map(
                Object.keys(Object.fromEntries(initialValues)).map(
                    item =>{
                        return currentValues.includes(item) ? [item, true] : [item, false]
                    }
                ),
            ))
    }, [currentValues])

    return [valuesMap, setValuesMap]

}
