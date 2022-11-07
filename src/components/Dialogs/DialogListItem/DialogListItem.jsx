import React, { useState } from 'react';
import s from './../Dialogs.module.css';


const DialogListItem = (props) => {

    return (
        <div className={s.dialog}>
            <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album' />
            <div className={s.person}>
                {props.name}
            </div>
                
        </div>
    )
}

export default DialogListItem;