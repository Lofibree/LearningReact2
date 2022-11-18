import React from 'react';
import s from './CharacterItem.module.css'

const CharacterItem = (props) => {
    // debugger;
    return (
        <div className={s.characterItem}>
            <div className={s.name}>
                {props.name}
            </div>
            <div>
                <img src={props.img} />
            </div>
            <div>
                {props.nickname}
            </div>
            <div>
                Birthday: {props.birthday}
            </div>
        </div>
    );
};

export default CharacterItem;