import React from 'react';
import s from './UserPhotoItem.module.css'

const UserPhotoItem = (props) => {
    return (
        <div>
            <img src={props.src} className={s.img}/>
        </div>
    );
};

export default UserPhotoItem;