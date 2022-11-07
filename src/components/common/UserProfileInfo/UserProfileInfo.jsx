import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import ProfileStatusContainer from '../../MyPosts/ProfileStatus/ProfileStatusContainer';
import UserStatusContainer from '../../Users/UserStatus/UserStatusContainer';
import s from './UserProfileInfo.module.css';
import PhotoPopupOnClick from '../PhotoPopup/PhotoPopupOnClick';
import fakePhoto from '../../../accets/images/default-img.img'
import { BiImageAlt } from 'react-icons/bi'


const UserProfileInfo = (props) => {

    const myId = useSelector(state => state.auth.id);

    const loadImg = (url) => new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        resolve();
    })

    const loadImgCallBack = () => {
        loadImg('https://picsum.photos/200').then(img => {
            debugger;
            console.log(img)
        })
    }


    return (
        <> 
            <div className={s.user}>
                <div className={s.userImgCardWrapper}>
                    <PhotoPopupOnClick id={props.id || props.userId} name={props.fullName || props.login} photo={props.photos.large}>
                        <img src={
                            props.photos.large !== null
                                ? props.photos.large
                                : `https://picsum.photos/seed/${props.userId || props.id}/580/310`
                        }
                            className={s.userImgCard}
                        />
                    </PhotoPopupOnClick>
                    {/* {() => loadImgCallBack} */}
                    {/* <button onClick={loadImgCallBack}>fgsfdgfdgg</button> */}
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
                    <div className={s.userPhotosBox}>
                        <div className={s.photosTitle}>
                            <BiImageAlt />
                            <span>Photos</span>
                        </div>
                        <div className={s.photos}>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileInfo;