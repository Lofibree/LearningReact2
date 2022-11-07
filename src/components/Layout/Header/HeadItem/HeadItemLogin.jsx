import React from 'react';
import s from './HeadItem.module.css';

const HeadItem = (props) => {
    return (
        <div className={s.itemLogin}>
            <div className={s.loginInfo}>
                <div>
                    {props.title}
                </div>
                <div>
                    {props.login}
                </div>
                <div>
                    {props.email}
                </div>
                <div>
                    {props.id}
                </div>
            </div>
            <button onClick={props.logoutThunkCreator} className={s.logoutBtn}>Logout</button>
        </div>
    );
};

export default HeadItem;