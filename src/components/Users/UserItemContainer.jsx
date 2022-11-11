import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserItem from './UserItem';
import { setFollowThunkCreator, setUnFollowThunkCreator } from '../../redux/usersReducer';


const UserItemContainer = (props) => {

    const dispatch = useDispatch();
    const followingInProgress = useSelector(state => state.usersPage.followingInProgress);
    
    const setFollow = (id) => {
        dispatch(setFollowThunkCreator(id))
    }
    const setUnFollow = (id) => {
        dispatch(setUnFollowThunkCreator(id))
    }
    return (
        <UserItem
            {...props}
            followingInProgress={followingInProgress}
            setFollow={setFollow}
            setUnFollow={setUnFollow}
        />
    );
};

export default UserItemContainer;