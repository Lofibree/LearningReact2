import React from 'react';
import s from '../components/Users/UserContainer/User.module.css';
import fakePhoto from './../accets/images/default-img.img'
import { BiImageAlt } from 'react-icons/bi'
import PhotoPopupOnClick from '../components/common/PhotoPopup/PhotoPopupOnClick';



export const withSurrounding = (Component) => {

    class SurroundComponent extends React.Component {

        render() {
            return (
                <>
                    <div className={s.user}>
                        <div className={s.userImgCardWrapper}>
                            <PhotoPopupOnClick id={this.props.id || this.props.userId} name={this.props.fullName || this.props.login} photo={this.props.photos.large}>
                                <img src={
                                    this.props.photos.large !== null
                                        ? this.props.photos.large
                                        : `https://picsum.photos/seed/${this.props.userId || this.props.id}/580/310`
                                }
                                    className={s.userImgCard}
                                />
                            </PhotoPopupOnClick>
                        </div>
                        <div>
                            <div className={s.profileInfo}>
                                <PhotoPopupOnClick id={this.props.id || this.props.userId} name={this.props.fullName || this.props.login} photo={this.props.photos.large}>
                                    <img src={
                                        this.props.photos.large !== null
                                            ? this.props.photos.large
                                            : `https://picsum.photos/seed/${this.props.userId || this.props.id}/300/200`
                                    }
                                        className={s.userImg}
                                    />
                                </PhotoPopupOnClick>
                                <div className={s.infoWrapper}>
                                    <div className={s.name}>{this.props.fullName || this.props.login}</div>
                                    <Component {...this.props} />
                                    <div className={s.additionalInfo}>
                                        <div>My id: {this.props.userId || this.props.id}</div>
                                        <div className={s.lookingForAJob}>
                                            {
                                                this.props.lookingForAJob
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
                                    <PhotoPopupOnClick id={this.props.id -10 || this.props.userId -10} name={this.props.fullName || this.props.login} photo={this.props.photos.large}>
                                        <img
                                            src={`https://picsum.photos/seed/${this.props.userId - 10 || this.props.id - 10}/300/200`}
                                            className={s.img}
                                        />
                                    </PhotoPopupOnClick>
                                    <PhotoPopupOnClick id={this.props.id || this.props.userId} name={this.props.fullName || this.props.login} photo={this.props.photos.large}>
                                        <img src=
                                            {
                                                this.props.photos.large !== null
                                                    ? this.props.photos.large
                                                    : `https://picsum.photos/seed/${this.props.userId || this.props.id}/300/200`
                                            }
                                            className={s.img}
                                        />
                                    </PhotoPopupOnClick>
                                    <PhotoPopupOnClick id={this.props.id || this.props.userId} name={this.props.fullName || this.props.login} photo={this.props.photos.large}>
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
            )
        }
    }
    return SurroundComponent
};


