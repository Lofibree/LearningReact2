import React from 'react';
import s from './BrBadCard.module.css';
import { ImEnter } from 'react-icons/im'
import { NavLink } from 'react-router-dom';

const BrBadCard = (props) => {

    return (
        <div>
            {props.randomCharactersEl}
            <div className={s.morePhotos}>
                <span>More Characters</span>
                <NavLink to={`/BrBad`}><ImEnter className={s.imEnter} /></NavLink>
            </div>
        </div>
    );
};

export default BrBadCard;