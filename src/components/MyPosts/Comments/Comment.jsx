import React from 'react';
import s from './Comments.module.css';

const Comment = (props) => {
    return (
        <div className={s.comment}>
            <header className={s.headerComment}>
                <span><a className={s.name}>{props.name}</a></span>
                <div className={s.email}>{props.email}</div>
            </header>
            <main>
                <div>{props.body}</div>
            </main>
        </div>
    );
};

export default Comment;