import React, {useState} from "react"
import ChoiceGender from "./components/QuizGenderLayout/QuizGender";
import {Form, Formik} from "formik";
import QuizGender from "./components/QuizGenderLayout/QuizGender";
import MainGoal from "./components/MainGoalLayout/MainGoal";
import Motivation from "./components/MotivationLayout/Motivation";
import Age from "./components/AgeLayout/Age"
export default () => {
    const [fieldsComponentsState, setFieldsComponentsState] = useState({
        genderLayout: true,
        goalLayout: false,
        motivationLayout:false,
        ageLayout: false,
    })

    const confirmSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={{
                gender: null,
                goal: null,
                motivation: null,
                age: null
            }}
            onSubmit={confirmSubmit}
            disabled={true}
        >

            {({setFieldValue, handleSubmit, values}) => {

                const fieldsComponents = {
                    "genderLayout": (
                        <QuizGender
                            setFieldValue={setFieldValue}
                            currentGender={values.gender}
                            fieldsComponentsState={fieldsComponentsState}
                            setFieldsComponentsState={setFieldsComponentsState}
                            nextKey="goalLayout"
                        />
                    ),
                    "goalLayout": (
                        <MainGoal
                            currentGoal={values.goal}
                            setFieldValue={setFieldValue}
                            fieldsComponentsState={fieldsComponentsState}
                            setFieldsComponentsState={setFieldsComponentsState}
                            nextKey="motivationLayout"
                            previousKey="genderLayout"
                          />
                    ),
                    "motivationLayout":(
                        <Motivation
                            currentMotivation={values.motivation}
                            setFieldValue={setFieldValue}
                            fieldsComponentsState={fieldsComponentsState}
                            setFieldsComponentsState={setFieldsComponentsState}
                            nextKey="ageLayout"
                            previousKey="goalLayout"
                        />
                    ),
                    "ageLayout":(
                        <Age
                            currentAge={values.age}
                            setFieldValue={setFieldValue}
                            fieldsComponentsState={fieldsComponentsState}
                            setFieldsComponentsState={setFieldsComponentsState}
                            nextKey="genderLayout"
                            previousKey="motivationLayout"
                        />
                    )
                }

                const showFieldsComponents = () => {
                    const fieldArray = Object.entries(fieldsComponentsState)
                            .find(([key, value]) => value)
                    if (!fieldArray && !fieldValue.length)
                        return <></>
                    const [fieldKey] = fieldArray
                    return fieldsComponents[fieldKey]
                }

                return (
                    <Form onSubmit={handleSubmit} >
                        {showFieldsComponents()}
                        <button type="submit">Submit</button>
                    </Form>
                )

            }}
        </Formik>
    )
}