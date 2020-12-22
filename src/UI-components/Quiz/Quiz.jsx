import React, {useState} from "react"
import QuizGender from "./components/QuizGenderLayout/QuizGender";
import {Form, Formik} from "formik";
import QuizMotivation from "./components/QuizMotivation/QuizMotivation";
import FormFieldLayout from "./common_components/FormFieldLayout/FormFieldLayout";
import * as Yup from "yup";
import withInputField from "./HOC/withInputField";
import QuizGoal from "./components/QuizGoal/QuizGoal";
import QuizDietType from "./components/QuizDietType/QuizDietType";
import {ProgressStyled} from "./Quiz-styled";
import QuizTimesDayEat from "./components/QuizTimesDayEat/QuizTimesDayEat";
import QuizLevelActive from "./components/QuizLevelActive/QuizLevelActive";
import QuizHardWork from "./components/QuizHardWork/QuizHardWork";
import QuizInjuries from "./components/QuizInjuries/QuizInjuries";
import QuizEmail from "./components/QuizEmail/QuizEmail";

export default () => {

    const fieldsComponents = [
        ["gender", QuizGender],
        ["goal", QuizGoal],
        ["motivation", QuizMotivation],
        ["age", withInputField(
            "How old are you?",
            {
                type: "number",
                min: 18,
                max: 90
            }
        )],
        ["height", withInputField(
            "Your height",
            {
                type: "number",
                min: 54,
                max: 300,
                postfix: "sm"
            }
        )],
        ["currentWeight", withInputField(
            "Your current weight",
            {
                type: "number",
                min: 15,
                max: 500,
                postfix: "kg"
            }
        )],
        ["goalWeight", withInputField(
            "Your goal weight",
            {
                type: "number",
                min: 15,
                max: 500,
                postfix: "kg"
            }
        )],
        ["dietType", QuizDietType],
        ["timesDayEat", QuizTimesDayEat],
        ["levelActive", QuizLevelActive],
        ["injuries", QuizInjuries],
        ["hardWork", QuizHardWork],
        ["email", QuizEmail],
    ]

    const [fieldsComponentsState, setFieldsComponentsState] = useState(fieldsComponents.reduce(
        (currObj, [key, value]) => (
            {
                ...currObj,
                [key]: key === "injuries"
            }
    ), {}))

    const confirmSubmit = (values) => {
        console.log(values)
    }

    const validationSchema = Yup.object({

        age: Yup.number()
            .required("Вы не ввели возраст!")
            .integer()
            .truncate(),

        height: Yup.number()
            .required("Вы не ввели возраст!")
            .integer()
            .truncate(),

        currentWeight: Yup.number()
            .required("Вы не ввели возраст!")
            .integer()
            .truncate(),

        goalWeight: Yup.number()
            .required("Вы не ввели вес!")
            .integer()
            .truncate(),

        email: Yup.string()
            .required("Вы не ввели возраст!")
            .email("Не корректный email!")

    })

    return (

        <Formik
            initialValues={{
                gender: null,
                goal: null,
                motivation: null,
                age: 18,
                height: 54,
                currentWeight: 15,
                goalWeight: 15,
                dietType: null,
                timesDayEat: null,
                levelActive: null,
                injuries: [],
                hardWork: null,
                email: null
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

                // TODO: fix problem of division by zero
                return (
                    <Form onSubmit={handleSubmit} style={{width: "100%"}}>
                        <ProgressStyled
                            completed={Object.values(fieldsComponentsState).indexOf(true) * 100 / (fieldsComponents.length - 1)}
                            style={{margin: "-19px -16px 9px"}}
                        />
                        {showFieldsComponents()}
                        <button type="submit">Submit</button>
                    </Form>
                )

            }}
        </Formik>
    )
}