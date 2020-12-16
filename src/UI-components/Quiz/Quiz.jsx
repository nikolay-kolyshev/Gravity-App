import React, {useState} from "react"
import ChoiceGender from "./components/QuizGender";
import {Form, Formik} from "formik";
import QuizGender from "./components/QuizGender";

export default () => {

    const [fieldsComponentsState, setFieldsComponentsState] = useState({
        gender: true
    })

    const confirmSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={{
                gender: ""
            }}
            onSubmit={confirmSubmit}
            disabled={true}
        >
            {({setFieldValue, handleSubmit, values}) => {

                const fieldsComponents = {
                    "gender": (
                        <QuizGender
                            setFieldValue={setFieldValue}
                            currentGender={values.gender}
                            fieldsComponentsState={fieldsComponentsState}
                            setFieldsComponentsState={setFieldsComponentsState}
                            nextKey="goal"
                        />
                    ),
                    "goal": <div>Жопа</div>
                }

                const showFieldsComponents = () => {
                    // TODO: refactoring
                    const fieldArray = Object.entries(fieldsComponentsState).find(([key, value]) => value)
                    if (!fieldArray && !fieldValue.length)
                        return <></>
                    const [fieldValue] = fieldArray
                    return fieldsComponents[fieldValue]
                }

                return (
                    <Form onSubmit={handleSubmit}>
                        {showFieldsComponents()}
                        <button type="submit">Submit</button>
                    </Form>
                )

            }}
        </Formik>
    )
}