import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserPhotosTC } from '../../redux/userPhotosReducer';
import { getUserThunkCreator } from '../../redux/usersReducer';
import PhotoPopupOnClick from '../common/PhotoPopup/PhotoPopupOnClick';
import Preloader from '../common/Preloader/Preloader';
import UserPhotoItem from './UserPhotoItem/UserPhotoItem';
import UserPhotos from './UserPhotos';

const UserPhotosContainer = () => {
    useEffect(() => {
        dispatch(getUserPhotosTC());
        dispatch(getUserThunkCreator(id))
    }, [])
    const {id} = useParams();
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.userPhotos.isFetching);
    const user = useSelector(state => state.usersPage.user);
    const photos = useSelector(state => state.userPhotos.photos);
    const photosEl = photos.map(ph => <PhotoPopupOnClick id={id} src={ph.url} name={user.fullName}><UserPhotoItem src={ph.url} /></PhotoPopupOnClick>)
    return (
        <>
            {isFetching
                ? <Preloader />
                : <UserPhotos photosEl={photosEl} id={id} user={user}/>
            }
        </>
    );
};

export default UserPhotosContainer;