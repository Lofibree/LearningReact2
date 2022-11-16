import React, { useState } from 'react';
import s from './Dialogs.module.css';
import { Form, Field } from 'react-final-form'
import { Input, Button } from '../common/FormsControls/FormsControls';
import { required, minFieldLength, composeValidators } from '../Utils/Validators/validators';
import { CreateField } from '../common/FormsControls/FormsControls';


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

    return (
        <Form
            onSubmit={(values) => {
                props.addNewDialog(values)
            }}
            render={renderProps => {
                const { handleSubmit } = renderProps;
                return (
                    <form onSubmit={handleSubmit} className={s.formLogin}>
                        {CreateField('name', 'name', 'name', composeValidators(required, minFieldLength(5)), Input)}
                        <Button type='submit'>Create</Button>
                    </form>
                )
            }}
        >
        </Form>
    )
}


export default Dialogs;