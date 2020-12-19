import React from 'react'
import ArrowPrev from "../PagePrevButton/PagePrevButton";

export default ({InnerComponent, setFieldsComponentsState, fieldsComponentsState, title, prevKey, currentKey, nextKey, ...restProps}) => {

    const handlePagePrev = () => {
        setFieldsComponentsState({
            ...fieldsComponentsState,
            [prevKey]: true,
            [currentKey]: false
        })
    }

    const handlePageNext = () => {
        setFieldsComponentsState({
            ...fieldsComponentsState,
            [currentKey]: false,
            [nextKey]: true
        })
    }

    return (
        <>
            {
                currentKey === "gender"
                    ? (
                        <InnerComponent
                            handlePageNext={handlePageNext}
                            currentKey={currentKey}
                            {...restProps}
                        />
                    )
                    : (
                        <div>
                            <ArrowPrev handlePagePrev={handlePagePrev}/>
                            <InnerComponent
                                handlePageNext={handlePageNext}
                                currentKey={currentKey}
                                {...restProps}
                            />
                        </div>
                    )
            }
        </>
    )

}

