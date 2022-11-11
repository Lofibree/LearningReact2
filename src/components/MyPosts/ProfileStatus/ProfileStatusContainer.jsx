import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { updateStatusThunkCreator } from '../../../redux/profileReducer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileStatusContainer = (props) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.profilePage.status);

    const updateStatus = (newStatus) => {
        dispatch(updateStatusThunkCreator(newStatus))
    }
    return (
        <ProfileStatusWithHooks
            updateStatus={updateStatus}
            status={status}
            id={props.id}
            {...props}
        />
    )
}


export default ProfileStatusContainer;