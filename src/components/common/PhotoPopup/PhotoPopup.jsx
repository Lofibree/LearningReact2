import React from 'react';
import s from './PhotoPopup.module.css';
import PhotoHover from '../PhotoHover/PhotoHover';


const PhotoPopup = (props) => {
// debugger;

    return (
        <div className={props.popupActive ? (s.popup + ' ' + s.active) : s.popup}
            onClick={() => {props.setPopupActive(false)}}
        >
            <div className={props.popupActive ? (s.popupContent + ' ' + s.active) : s.popupContent}
                onClick={e => e.stopPropagation()}
            >
                <div className={s.bgColor}>
                    <PhotoHover id={props.id} name={props.name} photo={props.photo}>
                        <img src=
                            {
                                props.src && props.src.indexOf('https') !== -1
                                    ? `https://picsum.photos/seed/${props.id}/700/560`
                                    : props.src
                            }
                            className={s.img}
                        />
                    </PhotoHover>
                </div>
            </div> 
        </div>
    )

}


export default PhotoPopup;