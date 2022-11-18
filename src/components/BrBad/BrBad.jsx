import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './BrBad.module.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const BrBad = (props) => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
 
    return (
        <div className={s.charactersContainer}>
            <AiOutlineArrowLeft onClick={goBack} className={s.arrowBtn} />
            <div className={s.characters}>
                {props.characters}
            </div>
        </div>
    );
};

export default BrBad;