import React from 'react';
import { useState } from 'react';
import PhotoPopup from './PhotoPopup';

const PhotoPopupOnClick = (props) => {
    // debugger; 
    const [popupActive, setPopupActive] = useState(false)

    return (
        <div>
            <div onClick={() => setPopupActive(true)}>
                {props.children}
            </div>
            <PhotoPopup
                popupActive={popupActive}
                setPopupActive={setPopupActive}
                src={props.children.props.src}
                // id={props.id}
                {...props}
            /> 
        </div>
    )

}


export default PhotoPopupOnClick;