import React from "react";
import { compose } from "redux";
import {withFormControls} from '../../../hoc/withFormControls';
import s from './FormsControls.module.css'

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


export const TextArea = compose(
    withFormControls
) (TextAreaDef)

export const Input = compose(
    withFormControls
) (InputDef)