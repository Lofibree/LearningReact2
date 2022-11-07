import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserItem from './UserItem';
import { setFollowThunkCreator, setUnFollowThunkCreator } from '../../redux/usersReducer';


const UserItemContainer = (props) => {

    const dispatch = useDispatch();

    const usersBank = useSelector(state => state.usersPage.usersBank);
    const getIsFollowed = () => {
        let neededUserIndex = usersBank.findIndex(user => user.id === props.id);
        // debugger;
        let isFollowed = usersBank[neededUserIndex].followed
        return isFollowed
    }
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
            isFollowed={getIsFollowed()}
        />
    );
};

export default UserItemContainer;