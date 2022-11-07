import React from 'react';
import s from './Users.module.scss';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }

    return (
        <div className={s.users}>
            <div className={s.pagesNumberBox}>
                {pagesArr.map(
                    (p) => {
                        if (p <= 10) {
                            return (
                                <span
                                    className={
                                        props.currentPage === p
                                            ? s.selectedPage
                                            : undefined
                                    }
                                    onClick={() => {
                                        props.onPageChanged(p)
                                    }}
                                >
                                    {p}
                                </span>
                            )
                        }
                    }
                )}
            </div>
            {props.usersItemsEl}
        </div>
    )
}



export default Users;