import React from 'react';
import s from './PhotosCard.module.css';
import PhotoPopupOnClick from '../PhotoPopup/PhotoPopupOnClick';
import fakePhoto from '../../../accets/images/default-img.img'
import { NavLink } from 'react-router-dom';
import { ImEnter } from 'react-icons/im'

const PhotosCard = (props) => {
    return (
        <div>
                <div className={s.photos} >
                    <PhotoPopupOnClick id={props.id - 10 || props.userId - 10} name={props.fullName || props.login} photo={props.photos.large}>
                        <img
                            src={`https://picsum.photos/seed/${props.userId - 10 || props.id - 10}/300/200`}
                            className={s.img}
                        />
                    </PhotoPopupOnClick>
                    <PhotoPopupOnClick id={props.id || props.userId} name={props.fullName || props.login} photo={props.photos.large}>
                        <img src=
                            {
                                props.photos.large !== null
                                    ? props.photos.large
                                    : `https://picsum.photos/seed/${props.userId || props.id}/300/200`
                            }
                            className={s.img}
                        />
                    </PhotoPopupOnClick>
                    <PhotoPopupOnClick id={props.id || props.userId} name={props.fullName || props.login} photo={props.photos.large}>
                        <img
                            src={fakePhoto}
                            className={s.img}
                        />
                    </PhotoPopupOnClick>
                </div>
                <div className={s.morePhotos}>
                    <span>More Photos</span>
                    <NavLink to={`/photos/${props.id || props.userId}`}><ImEnter className={s.imEnter} /></NavLink>
                </div>
        </div>
    );
};

export default PhotosCard;