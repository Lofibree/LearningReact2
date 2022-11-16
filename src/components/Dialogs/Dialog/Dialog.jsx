import React from 'react';
import s from './Dialog.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai' 
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../../common/FormsControls/FormsControls';
import { Form, Field } from 'react-final-form'
import { required, minFieldLength, composeValidators } from '../../Utils/Validators/validators';
import { CreateField } from '../../common/FormsControls/FormsControls';



const Dialog = (props) => {

    const navigate = useNavigate();
    const addNewMess = (formData) => {
        props.addNewMess(formData.messageBody)
    }
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className={s.dialog}>
            <div className={s.arrowBtn}>
                <AiOutlineArrowLeft onClick={goBack} />
            </div>
            <div>
                <header className={s.dialogHeader}>
                    <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album'
                        className={s.img}
                    />
                    {props.name}
                </header>
                <main>
                    {props.messageEl}
                </main>
                <div>
                    <NewMessageForm addNewMess={addNewMess} />
                </div>
            </div>
        </div>
    );
};


const NewMessageForm = (props) => {

    return (
        <Form
            onSubmit={(values) => {
                props.addNewMess(values)
            }}
            render={renderProps => {
                const { handleSubmit } = renderProps;
                return (
                    <form onSubmit={handleSubmit} className={s.formLogin}>
                        {CreateField('messageBody', 'text', 'messageBody', composeValidators(required, minFieldLength(5)), Input)}
                        <Button type='submit'>Send</Button>
                    </form>
                )
            }}
        >
        </Form>
    )
}

export default Dialog;