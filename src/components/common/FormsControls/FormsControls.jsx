import React from "react";
import { compose } from "redux";
import {withFormControls} from '../../../hoc/withFormControls';
import s from './FormsControls.module.css'
import { Field } from 'react-final-form'

const TextAreaDef = ({input, meta, ...props}) => {
    return (
        <textarea {...input} {...props} />
    )
}
const InputDef = ({input, meta, ...props}) => {
    return (
        <input {...input} {...props} />
    )
}

export const Button = ({input, meta, ...props}) => {
    return (
        <button className={s.button} disabled={props.submitting}>{props.children}</button>
    )
}


export const CreateField = (name, type, placeholder, validate, component) => {
    return (
        <Field
            name={name}
            type={type}
            placeholder={placeholder}
            validate={validate}
            component={component}
        />
    )
}

export const TextArea = compose(
    withFormControls
) (TextAreaDef)

export const Input = compose(
    withFormControls
) (InputDef)