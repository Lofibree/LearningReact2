import React from 'react';
import s from './ProfItem.module.css';
import { Link } from 'react-router-dom';

const ProfItem = (props) => {
    return (
        <div>
            <div className={s.item}>
                <a href={props.href}>{props.title}</a>
                {/* <Link to=''>{props.title}</Link> */}
            </div>
        </div>
    );
};

export default ProfItem;