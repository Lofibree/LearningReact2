import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomCharactersTC } from '../../../redux/brBadReducer';
import s from './BrBadCard.module.css';
import Preloader from '../../common/Preloader/Preloader';
import BrBadCard from './BrBadCard';
import { NavLink } from 'react-router-dom';


const BrBadCardContainer = () => {

    const dispatch = useDispatch();
    const randomCharacters = useSelector(state => state.breakingBad.randomCharacters);
    const isFetchingCard = useSelector(state => state.breakingBad.isFetchingCard);
    // debugger;
    useEffect(() => {
        dispatch(getRandomCharactersTC())
    }, [])
    const randomCharactersEl = randomCharacters.map(r => <NavLink to={'/BrBad/' + r.char_id}><img src={r.img} className={s.img} /></NavLink>)
    // debugger;
    return (
        <>
            {isFetchingCard
                ? <Preloader />
                : <BrBadCard isFetchingCard={isFetchingCard} randomCharactersEl={randomCharactersEl} />
            }

        </>
    );
};

export default BrBadCardContainer;