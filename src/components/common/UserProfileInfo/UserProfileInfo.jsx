import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import ProfileStatusContainer from '../../MyPosts/ProfileStatus/ProfileStatusContainer';
import UserStatusContainer from '../../Users/UserStatus/UserStatusContainer';
import s from './UserProfileInfo.module.css';
import PhotoPopupOnClick from '../PhotoPopup/PhotoPopupOnClick';
import { BiImageAlt } from 'react-icons/bi'
import { RiMovieLine } from 'react-icons/ri'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import BrBadCardContainer from '../../BrBad/BrBadCard/BrBadCardContainer';
import PhotosCard from '../PhotosCard/PhotosCard';


const UserProfileInfo = (props) => {

    const myId = useSelector(state => state.auth.id);

    const [stylePhotos, setStylePhotos] = useState(s.photosPreviewCard);
    const [styleBrBad, setStyleBrBad] = useState(s.BrBadCard);

    const showUserPhotos = () => {
        setStylePhotos(s.photosPreviewCard)
        setStyleBrBad(s.BrBadCard)
    }
    const showBrBad = () => {
        setStylePhotos(s.photosPreviewCard + ' ' + s.active)
        setStyleBrBad(s.BrBadCard + ' ' + s.active)
    }


    return (
        <>
            <div className={s.user}>
                <div className={s.userImgCardWrapper}>
                    <PhotoPopupOnClick id={props.id || props.userId} name={props.fullName || props.login} photo={props.photos.large}>
                        <LazyLoadImage
                            src={
                                props.photos.large !== null
                                    ? props.photos.large
                                    : `https://picsum.photos/seed/${props.userId || props.id}/580/310`
                            }
                            effect='blur'
                            placeholderSrc={props.src}
                            className={s.userImgCard}
                        />
                    </PhotoPopupOnClick>
                </div>
                <div>
                    <div className={s.profileInfo}>
                        <PhotoPopupOnClick id={props.id || props.userId} name={props.fullName || props.login} photo={props.photos.large}>
                            <img src={
                                props.photos.large !== null
                                    ? props.photos.large
                                    : `https://picsum.photos/seed/${props.userId || props.id}/300/200`
                            }
                                className={s.userImg}
                            />
                        </PhotoPopupOnClick>
                        <div className={s.infoWrapper}>
                            <div className={s.name}>{props.fullName || props.login}</div>
                            {
                                props.id === myId
                                    ? <ProfileStatusContainer {...props} />
                                    : <UserStatusContainer {...props} />
                            }
                            <div className={s.additionalInfo}>
                                <div>My id: {props.userId || props.id}</div>
                                <div className={s.lookingForAJob}>
                                    {
                                        props.lookingForAJob
                                            ? 'Looking for a job'
                                            : 'Not looking for a job'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.userMediaBox}>
                        <div className={s.mediaUserTitleBox}>
                            <div className={s.photosTitle} onClick={showUserPhotos}>
                                <BiImageAlt />
                                <span>Photos</span>
                            </div>
                            <div className={s.photosTitle} onClick={showBrBad}>
                                <RiMovieLine />
                                <span>Br Bad</span>
                            </div>
                        </div>
                        {stylePhotos === s.photosPreviewCard + ' ' + s.active && styleBrBad === s.BrBadCard + ' ' + s.active
                            ? <BrBadCardContainer className={styleBrBad} />
                            : <PhotosCard {...props} className={stylePhotos}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileInfo;