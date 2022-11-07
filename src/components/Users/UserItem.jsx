import React from 'react';
import { NavLink } from 'react-router-dom';
import PhotoPopupOnClick from '../common/PhotoPopup/PhotoPopupOnClick';
import s from './Users.module.scss';





const UserItem = (props) => {

    const onFollowClick = () => {
        props.setFollow(props.id)
    }
    const onUnFollowClick = () => {
        props.setUnFollow(props.id)
    }

    return (
        <div className={s.item}>
            <div className={s.imgPlusFollow}>
                <PhotoPopupOnClick {...props}>
                    <img
                        src={props.photo !== null
                            ? props.photo
                            : `https://picsum.photos/seed/${props.id}/300/200`
                        }
                        className={s.img}
                    />
                </PhotoPopupOnClick>
                <div>
                    {props.isFollowed
                        ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={onUnFollowClick} >UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={onFollowClick} >Follow</button>
                    }
                </div>
            </div>
            <div className={s.innerItem}>
                <div className={s.namePlusLocation}>
                    <div className={s.name}>
                        <NavLink to={'/users/' + props.id}>{props.name}</NavLink>
                    </div>
                    <div className={s.location}>
                        <div>Location: <br/>I'm citizen of the world</div>
                    </div>
                </div>
                <div className={s.status}> 
                    {props.status !== null
                    ? props.status
                    : <span className={s.statusDefault}>I don't know what to say</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserItem;