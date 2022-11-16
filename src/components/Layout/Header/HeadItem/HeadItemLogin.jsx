import React from 'react';
import s from './HeadItem.module.css';
import {RiLogoutBoxRLine} from 'react-icons/ri'

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
            <RiLogoutBoxRLine onClick={props.logoutThunkCreator} className={s.logoutBtn} title={'logout'}/>
        </div>
    );
};

export default HeadItem;