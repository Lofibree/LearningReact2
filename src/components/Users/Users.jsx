import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import s from './Users.module.scss';


const Users = (props) => {

    return (
        <div className={s.users}>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {props.usersItemsEl}
        </div>
    )
}



export default Users;