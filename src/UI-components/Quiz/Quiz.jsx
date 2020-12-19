import React, {useState} from "react"
import QuizGender from "./components/QuizGenderLayout/QuizGender";
import {Form, Formik} from "formik";
import QuizGoal from "./components/QuizGoal/QuizGoal";
import QuizMotivation from "./components/QuizMotivation/QuizMotivation";
import QuizAge from "./components/QuizAge/QuizAge"
import FormFieldLayout from "./common_components/FormFieldLayout/FormFieldLayout";
import * as Yup from "yup";

export default () => {

    const fieldsComponents = [
        ["gender", QuizGender],
        ["goal", QuizGoal],
        ["motivation", QuizMotivation],
        ["age", QuizAge]
    ]

    const [fieldsComponentsState, setFieldsComponentsState] = useState(fieldsComponents.reduce(
        (currObj, [key, value]) => (
            {
                ...currObj,
                [key]: key === "age"
            }
    ), {}))

    const confirmSubmit = (values) => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        age: Yup.number()
            .required("Вы не ввели возраст!")
            .integer()
            .truncate()
    })

    return (

        <Formik
            initialValues={{
                gender: null,
                goal: null,
                motivation: null,
                age: 18
            }}
            onSubmit={confirmSubmit}
            disabled={true}
            validationSchema={validationSchema}
        >

            {({setFieldValue, handleSubmit, values, errors, handleChange, handleBlur}) => {

                const fieldsComponentsLayout = fieldsComponents.reduce(
                    (currObj, [key, value], index) => (
                        {
                            ...currObj,
                            [key]: (
                                <FormFieldLayout
                                    currentGoal={values.goal}
                                    setFieldValue={setFieldValue}
                                    fieldsComponentsState={fieldsComponentsState}
                                    setFieldsComponentsState={setFieldsComponentsState}
                                    currentValue={values[key]}
                                    prevKey={index !== 0 && fieldsComponents.length > 1 ? fieldsComponents[index-1][0] : fieldsComponents[index][0]}
                                    currentKey={key}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors[key]}
                                    nextKey={
                                        fieldsComponents.length > 1 && index < fieldsComponents.length-1
                                            ? fieldsComponents[index+1][0]
                                            : fieldsComponents[index][0]
                                    }
                                    InnerComponent={value}
                                />
                            )
                        }
                    ), {})

                    const showFieldsComponents = () => {
                        const fieldArray = Object.entries(fieldsComponentsState)
                                .find(([key, value]) => value)
                        if (!fieldArray && !fieldValue.length)
                            return <></>
                        const [fieldKey] = fieldArray
                        return fieldsComponentsLayout[fieldKey]
                    }

                return (
                    <Form onSubmit={handleSubmit} style={{width: "100%"}}>
                        {showFieldsComponents()}
                        <button type="submit">Submit</button>
                    </Form>
                )

            }}
        </Formik>
    )
}