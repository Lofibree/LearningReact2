import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserItemContainer from './UserItemContainer';
import { getUsersThunkCreator, getOnPageChangedUsersThunkCreator } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';


const UsersContainer = () => {

    useEffect(() => {
        dispatch(getUsersThunkCreator(pageSize, currentPage))
    }, [])

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersPage.usersBank);
    const pageSize = useSelector(state => state.usersPage.pageSize);
    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount);
    const currentPage = useSelector(state => state.usersPage.currentPage);
    const isFetching = useSelector(state => state.usersPage.isFetching);

    const onPageChanged = (pageSize, pageNumber) => {
        dispatch(getOnPageChangedUsersThunkCreator(pageSize, pageNumber))
    }

    const usersItemsEl = users
        .map(u =>
            <UserItemContainer
                name={u.name}
                id={u.id}
                status={u.status}
                photo={u.photos.small}
                isFollowed={u.followed}
            />
        );

    return (
        <>
            {isFetching
                ? <Preloader />
                : <Users
                    pageSize={pageSize}
                    totalUsersCount={totalUsersCount}
                    currentPage={currentPage}
                    usersItemsEl={usersItemsEl}
                    onPageChanged={onPageChanged}
                />
            }
        </>
    )
};




export default compose(
    withAuthNavigate
)(UsersContainer)