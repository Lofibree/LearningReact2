import React from 'react';
import s from './Dialogs.module.css';
import DialogListItem from './DialogListItem/DialogListItem';
import { NavLink } from 'react-router-dom';
import Dialogs from './Dialogs';
import { addDialogAC } from '../../redux/messagesReducer';
import { connect } from 'react-redux/es/exports';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

 


let mapStateToProps = (state) => {
    return {
        dialogsEl: state.messagePage.dialogs
            .map(d => <NavLink to={'/dialogs/' + d.id} className={s.person}>
                <DialogListItem name={d.name} id={d.id} />
            </NavLink>
            ),
        value: state.messagePage.newDialogText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewDialog: (newDialogBody) => {
            dispatch(addDialogAC(newDialogBody));
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
) (Dialogs)