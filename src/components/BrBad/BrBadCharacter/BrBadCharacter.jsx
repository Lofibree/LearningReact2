import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getParticularCharacterTC } from '../../../redux/brBadReducer';
import s from './BrBadCharacter.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import PhotoPopupOnClick from '../../common/PhotoPopup/PhotoPopupOnClick';
import Preloader from '../../common/Preloader/Preloader';



const BrBadCharacter = () => {
    // debugger;
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        // debugger;
        dispatch(getParticularCharacterTC(id))
    }, [])
    const partCharacter = useSelector(state => state.breakingBad.partCharacter[0]);
    const isFetchingCharacter = useSelector(state => state.breakingBad.isFetchingCharacter);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            {isFetchingCharacter
                ? <Preloader />
                :
                <div>
                    <div className={s.arrovBtnBox}>
                        <AiOutlineArrowLeft
                            onClick={goBack}
                            className={s.arrowBtn}
                        />
                    </div>
                    <div className={s.characterCard}>
                        <div>
                            <PhotoPopupOnClick id={id} name={partCharacter.nickname} >
                                <img src={partCharacter.img} className={s.img} />
                            </PhotoPopupOnClick>
                        </div>
                        <div className={s.characterInfo}>
                            <div className={s.name}>
                                <span>{partCharacter.name}</span> A.K.A <span>{partCharacter.nickname}</span>
                            </div>
                            <div>
                                <span className={s.spanInfoTitle}>Birthday:</span> <span className={s.spanInfo}>{partCharacter.birthday}</span>
                            </div>
                            <div>
                                <span className={s.spanInfoTitle}>Status:</span> <span className={s.spanInfo}>{partCharacter.status}</span>
                            </div>
                            <div>
                                <span className={s.spanInfoTitle}>Portrayed:</span> <span className={s.spanInfo}>{partCharacter.portrayed}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};



export default BrBadCharacter;