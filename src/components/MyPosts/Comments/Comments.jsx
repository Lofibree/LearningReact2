import React from 'react';
import s from './Comments.module.css';


const Comments = (props) => {
    return (
        <div>
            <h3 className={s.postId}>Comments</h3>
            {props.commentsEl}
        </div>
    );
};

export default Comments;