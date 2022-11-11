import React, { useState } from 'react';
import s from './Post.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import PhotoPopupOnClick from '../../common/PhotoPopup/PhotoPopupOnClick';
 

const Post = (props) => {

    const [styleItem, setStyleItem] = useState(s.item);
    const [styleText, setStyleText] = useState(s.postText);

    return (
        <div
            className={styleItem}
            onClick={() => {
                setStyleItem(s.item + ' ' + s.active);
                setStyleText(s.postText + ' ' + s.active);
            }} 
        >
            <div className={s.container}>
                <h3 className={s.postId}>Post's id: {props.id}</h3>
                <div>
                    <PhotoPopupOnClick id={props.id} name={props.title}>
                        <img src={`https://picsum.photos/seed/${props.id}/526/300`} className={s.img}/>
                    </PhotoPopupOnClick>
                </div>
                <header className={s.headerPost}>
                    <div className={s.postAuthor}>{props.title}</div>
                </header>
                <main className={s.mainPost}>
                    <h6 className={styleText}>{props.body}</h6>
                    <div className={s.iconBox}>
                    </div>
                </main>
                <footer className={s.footer}>
                    <AiOutlineArrowLeft onClick={props.goBack} className={s.arrowBtn} />
                </footer>
            </div>
        </div>
    );
};

export default Post;