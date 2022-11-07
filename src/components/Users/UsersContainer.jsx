import React from 'react';
import { useSelector } from 'react-redux';
import UserItemContainer from './UserItemContainer';
import { getUsersThunkCreator, getOnPageChangedUsersThunkCreator } from '../../redux/usersReducer';
import { useDispatch } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';






class UsersAJAX extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }
    onPageChanged = (pageNumber) => {
        this.props.getOnPageChangedUsers(this.props.pageSize, pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        usersItemsEl={this.props.usersItemsEl}
                        onPageChanged={this.onPageChanged}
                    />
                }
            </>
        );
    }
}


const UsersContainer = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersPage.usersBank);
    const pageSize = useSelector(state => state.usersPage.pageSize);
    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount);
    const currentPage = useSelector(state => state.usersPage.currentPage);
    const isFetching = useSelector(state => state.usersPage.isFetching);

    const getUsers = (pageSize, currentPage) => {
        dispatch(getUsersThunkCreator(pageSize, currentPage))
    }
    const getOnPageChangedUsers = (pageSize, pageNumber) => {
        dispatch(getOnPageChangedUsersThunkCreator(pageSize, pageNumber))
    }

    const usersItemsEl = users
        .map(u => 
            <UserItemContainer 
                name={u.name}
                id={u.id}
                status={u.status}
                photo={u.photos.small}
            />
        );

    return (
        <UsersAJAX
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            usersItemsEl={usersItemsEl}
            isFetching={isFetching}
            getUsers={getUsers}
            getOnPageChangedUsers={getOnPageChangedUsers}
        />
    );
};



 
export default compose(
    withAuthNavigate
) (UsersContainer)