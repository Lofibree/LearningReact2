import React from 'react';
import s from './PostItem.module.scss';
import { NavLink } from 'react-router-dom';


const PostItem = (props) => {

    return (
        <div className={s.item}>
            <div className={s.container}>
                <header className={s.headerPost}>
                    <div className={s.postId}>{props.id}</div>
                    <img src={`https://picsum.photos/seed/${props.id}/526/300`} />
                    <div className={s.postAuthor}>
                        <NavLink to={'/profile/' + props.id} className={s.commentsLink}>
                            {props.title}
                        </NavLink>
                    </div>
                </header>
                <main className={s.mainPost}>
                    <h6 className={s.postText}>{props.body}</h6>
                </main>
                <footer className={s.footer}>
                </footer>
            </div>
        </div>
    );
};

export default PostItem;