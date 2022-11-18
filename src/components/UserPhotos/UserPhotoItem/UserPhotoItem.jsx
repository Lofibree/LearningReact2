import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import s from './UserPhotoItem.module.css'

const UserPhotoItem = (props) => {
    return (
        <div>
            <LazyLoadImage
                src={props.src}
                className={s.img}
                width={250}
                height={200}
                effect='blur'
                placeholderSrc={props.src}
            />
            {/* <img src={props.src} className={s.img}/> */}
        </div>
    );
};

export default UserPhotoItem;