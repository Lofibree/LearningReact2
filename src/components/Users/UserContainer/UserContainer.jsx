import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useParams } from 'react-router-dom';
import User from './User';
import { getUserThunkCreator } from './../../../redux/usersReducer';
import Preloader from '../../common/Preloader/Preloader';
import { getStatusThunkCreator } from '../../../redux/profileReducer';
import { compose } from 'redux';
import { withAuthNavigate } from './../../../hoc/withAuthNavigate'


const UserContainer = () => {

    useEffect(() => {
        dispatch(getStatusThunkCreator(id));
        dispatch(getUserThunkCreator(id));
    }, [])

    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.usersPage.user);
    let {lookingForAJob, fullName, userId, photos} = user;
    const isFetchingUser = useSelector(state => state.usersPage.isFetchingUser);
    const status = useSelector(state => state.profilePage.status);

    return (
        <>
            {isFetchingUser
                ? <Preloader />
                : <User
                    lookingForAJob={lookingForAJob}
                    fullName={fullName}
                    userId={userId}
                    photos={photos}
                    status={status}
                    id={id}
                />
            }
        </>
    );
};



export default compose(
    withAuthNavigate
) (UserContainer)