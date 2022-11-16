import React from 'react';
import { useState } from 'react';
import s from './PhotoHover.module.css'
import { AiOutlineEdit } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';

const PhotoHover = (props) => {
    // debugger;
    const [style, setStyle] = useState(s.layOnBgCard)
    const [stylePhoto, setStylePhoto] = useState(s.stylePhoto)

    return (
        <div className={s.photoHover}>
            <div
                onMouseOver={() => {
                    setStyle(s.layOnBgCard + ' ' + s.active)
                    setStylePhoto(s.stylePhoto + ' ' + s.active)
                }}
                onMouseOut={() => {
                    setStyle(s.layOnBgCard)
                    setStylePhoto(s.stylePhoto)
                }}
                className={s.leftSide}
            >
                <div className={stylePhoto}>
                    {props.children}
                </div>
                <AiOutlineEdit className={style} /> 
            </div>
            <div className={s.imgCommentsBox}>
                <div className={s.authorCard}>
                    <img src=
                        {!props.photo
                            ? `https://picsum.photos/seed/${props.id}/300/200`
                            : props.photo || props.src
                        }
                        className={s.img}
                        />
                    <div className={s.name}>
                        <NavLink to={'/users/' + props.id}>{props.name}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoHover;