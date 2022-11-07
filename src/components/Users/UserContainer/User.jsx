import React from 'react';
import { AiOutlineArrowLeft} from 'react-icons/ai' 
import s from './User.module.css';
import { useNavigate } from 'react-router-dom';
import UserProfileInfo from '../../common/UserProfileInfo/UserProfileInfo';


const User = (props) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/users')
    }
 
    return (
        <>
            <UserProfileInfo {...props} />
            <div className={s.arrowBox}>
                <AiOutlineArrowLeft onClick={goBack} className={s.arrowBtn}/>
            </div>
        </>
    );
};



export default User;