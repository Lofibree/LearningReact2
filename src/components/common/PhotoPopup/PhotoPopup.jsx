import React from 'react';
import s from './PhotoPopup.module.css';
import PhotoHover from '../PhotoHover/PhotoHover';


const PhotoPopup = (props) => {
// debugger;
// console.log(props)

    return (
        <div className={props.popupActive ? (s.popup + ' ' + s.active) : s.popup}
            onClick={() => {props.setPopupActive(false)}}
        >
            <div className={props.popupActive ? (s.popupContent + ' ' + s.active) : s.popupContent}
                onClick={e => e.stopPropagation()}
            >
                <div className={s.bgColor}>
                    <PhotoHover id={props.id} name={props.name}>
                        <img src=
                            {
                                props.src && props.src.indexOf('picsum') !== -1
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