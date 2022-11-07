import React from 'react';
import s from './HeadItem.module.css';

const HeadItem = (props) => {
    return (
        <div className={s.item}>
            <div>
                {props.title}
            </div>
        </div>
    );
};

export default HeadItem;