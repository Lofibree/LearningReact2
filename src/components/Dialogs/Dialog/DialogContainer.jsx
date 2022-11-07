import React from 'react';
import { useParams } from 'react-router-dom';
import { addMessAC } from '../../../redux/messagesReducer';
import MessageContainer from '../Message/MessageContainer';
import Dialog from './Dialog';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';


const DialogContainer = (props) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const index = useSelector(state => state.messagePage.messagesBank);
    let dialog = useSelector(state => state.messagePage.dialogs[id].name);
    let messagesBank = useSelector(state => state.messagePage.messagesBank);

    let getDialogName = () => {
        let messagesOfDialog = messagesBank.filter(m => m.ownerDialog == dialog);
        return messagesOfDialog;
    }
 
    let addNewMess = (newMessageBody) => {
        dispatch(addMessAC(newMessageBody, id));
    }

    let messageEl = getDialogName().map(m => <MessageContainer
        title={m.message}
        time={m.time}
        index={index.indexOf(m)}
    />);

    return (<Dialog
        name={state.messagePage.dialogs[id].name}
        addNewMess={addNewMess}
        messageEl={messageEl}
    />);
};

export default DialogContainer;