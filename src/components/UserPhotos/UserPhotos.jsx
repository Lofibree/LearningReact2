import React from 'react';
import s from './UserPhotos.module.css'
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { vkAPI } from '../api/api';

const UserPhotos = (props) => {
    
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    const getFriends = () => {
        vkAPI.getFriends().then(data => console.log(data))
    }
    return (
        <div>
            <div className={s.id}>ID: {props.id}</div>
            <button onClick={getFriends}>friends</button>
            <div>
                <div className={s.name}>{props.user.fullName}</div>
                <div>
                    <div className={s.lookingForAJob}>
                        {
                            props.lookingForAJob
                                ? 'Looking for a job'
                                : 'Not looking for a job'
                        }
                    </div>
                </div>
            </div>
            <div className={s.arrovBtnBox}>
                <AiOutlineArrowLeft onClick={goBack} className={s.arrowBtn} />
            </div>
            <div className={s.photos}>
                {props.photosEl}
            </div>
        </div>
    );
};

export default UserPhotos;