import {useEffect, useState} from "react";

export default currentValues => {

    const initialValues = new Map ([
        ["Спина, поясница", false],
        ["Плечи", false],
        ["Локти", false],
        ["Кисти рук", false],
        ["Пупочная грыжа", false],
        ["Колени", false],
        ["Тазобедренный сустав", false],
        ["Голеностоп, лодыжка", false]
    ])

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
