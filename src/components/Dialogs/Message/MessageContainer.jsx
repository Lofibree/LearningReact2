import React from 'react';
import s from './Message.module.css';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai'
import { useState } from 'react';
import { editMessAC, onEditChangeMessAC, 
    completeEditMessAC, deleteMessAC } from '../../../redux/messagesReducer';
import Message from './Message'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const MessageContainer = (props) => {

    const dispatch = useDispatch();
    const value = useSelector(state => state.messagePage.messagesBank[props.index].editMessText)
    // debugger;

    const [styleTextArea, setStyleTextArea] = useState(s.editText);
    const [styleEditBtn, setStyleEditBtn] = useState(s.editBtn);
    const [styleCompleteBtn, setStyleCompleteBtn] = useState(s.completeBtn);


    let editMess = () => {
        setStyleTextArea(styleTextArea + ' ' + s.active);
        setStyleEditBtn(styleEditBtn + ' ' + s.active);
        setStyleCompleteBtn(styleCompleteBtn + ' ' + s.active);
        // debugger;
        dispatch(editMessAC(props.index));
    }

    let onEditChange = (text) => {
        // debugger;
        dispatch(onEditChangeMessAC(text, props.index))
    }

    let completeEdit = () => {
        setStyleTextArea(s.editText);
        setStyleEditBtn(s.editBtn);
        setStyleCompleteBtn(s.completeBtn);
        dispatch(completeEditMessAC(props.index));
    }

    let deleteMess = () => {
        // debugger;
        dispatch(deleteMessAC(props.index))
    }


    return (<Message 
        editMessCont={editMess}
        onEditChangeCont={onEditChange}
        completeEditCont={completeEdit}
        deleteMessCont={deleteMess}
        title={props.title}
        time={props.time}
        index={props.index}
        value={value}
        styleTextArea={styleTextArea}
        styleEditBtn={styleEditBtn}
        styleCompleteBtn={styleCompleteBtn}
    />
    );
};


export default MessageContainer;