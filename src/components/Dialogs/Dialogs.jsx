import React, { useState } from 'react';
import s from './Dialogs.module.css';
import { Form, Field } from 'react-final-form'
import { Input, Button } from '../common/FormsControls/FormsControls';


const Dialogs = (props) => {

    const addNewDialog = (formData) => {
        props.addNewDialog(formData.name)
    }

    return (
        <div className={s.dialogs}>
            {props.dialogsEl}
            <div>
                <NewDialogForm addNewDialog={addNewDialog} />
            </div>
        </div>
    );
};


const NewDialogForm = (props) => {

    const required = value => (value ? undefined : 'Required');
    const minFieldLength = min => value => value.length >= min ? undefined : 'Too short'
    const composeValidators = (...validators) => {
        return (value) => (
            validators.reduce((error, validator) => error || validator(value), undefined)
        )
    }

    return (
        <Form
            onSubmit={(values) => {
                props.addNewDialog(values)
            }}
            render={renderProps => {
                const { handleSubmit } = renderProps;
                return (
                    <form onSubmit={handleSubmit} className={s.formLogin}>
                        <Field
                            name='name'
                            type='name'
                            placeholder='name'
                            validate={composeValidators(required, minFieldLength(5))}
                            component={Input}
                        />
                        <Button type='submit'>Create</Button>
                    </form>
                )
            }}
        >
        </Form>
    )
}


export default Dialogs;