import React from 'react';
import s from './Dialog.module.css';
// import { Field, reduxForm } from 'redux-form';
// import { Form, Field } from 'react-final-form'
import { AiOutlineArrowLeft } from 'react-icons/ai' 
import { useNavigate } from 'react-router-dom';
import { requiredField, maxLengthCreator } from '../../Utils/Validators/validators';
import { Button, TextArea } from '../../common/FormsControls/FormsControls';



const Dialog = (props) => {

    const navigate = useNavigate();

    const addNewMess = (values) => {
        props.addNewMess(values.newMessageBody)
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <AiOutlineArrowLeft onClick={goBack} className={s.arrowBtn} />
            <header className={s.dialog}>
                <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album' />
                {props.name}

            </header>
            <main>
                {props.messageEl}
            </main>
            <div className={s.dialogsItems}>
                <div>
                    {/* <AddMessForm {...props} onSubmit={addNewMess}/> */}
                </div>
            </div>
        </div>
    );
};


// const maxLength10 = maxLengthCreator(10);


// const AddMessForm = () => {

//     return (
//         <Form>
//             {(handleSubmit) => (
//                 <form onSubmit={handleSubmit}>
//                     <div className={s.newMessBox}>
//                         <Field component={TextArea} name='newMessageBody' placeholder='Enter your message' validate={[requiredField, maxLength10]} />
//                         <div>
//                             <Field component={Button}>Send</Field>
//                         </div>
//                     </div>
//                 </form>
//             )}
//         </Form>
//     )
// }


// const AddMessBoxFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessForm)


export default Dialog;