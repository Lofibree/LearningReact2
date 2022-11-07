import React from 'react';
import s from './Message.module.css';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';


const Message = (props) => {

    let editTextAreaEl = React.createRef();

    let editMess = () => {
        // debugger;
        props.editMessCont();
    }

    let onEditChange = () => {
        let text = editTextAreaEl.current.value;
        props.onEditChangeCont(text);
    }

    let completeEdit = () => {
        let text = editTextAreaEl.current.value;
        if (text !== '') {
            props.completeEditCont();
        }
    }

    let deleteMess = () => {
        props.deleteMessCont();
    }


    return (
        <div >
            <div className={s.message}>
                <div className={s.headerMess}>
                    <div className={s.messText}>
                        <div>{props.index}.</div>
                        <div>{props.title}</div>
                        <div className={s.date}>{props.time}</div>
                    </div>
                    <div className={s.iconBox}>
                        <AiOutlineEdit className={props.styleEditBtn} onClick={editMess} />
                        <AiOutlineCheck className={props.styleCompleteBtn} onClick={completeEdit} />
                        <AiOutlineDelete className={s.deleteBtn} onClick={deleteMess} />
                    </div>
                </div>
                <textarea className={props.styleTextArea} 
                    ref={editTextAreaEl}
                    onChange={onEditChange}
                    value={props.value}
                />
            </div>
        </div>
    );
};


export default Message;