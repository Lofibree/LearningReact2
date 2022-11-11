import React, { useState } from 'react';
import s from './ProfileStatus.module.css';
import {AiOutlineEdit} from 'react-icons/ai/'
import { useEffect } from 'react';




const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const statusValue = (e) => {
        setStatus(e.currentTarget.value);
    }
    const updateStatus = () => {
        setEditMode(false)
        if (status !== props.status) {props.updateStatus(status)}
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <div>
            {!editMode
                ? <div>
                    <span>
                        {props.status || 'No status'}
                    </span>
                    <AiOutlineEdit
                        onClick={() => setEditMode(true)}
                        className={s.editBtn}
                    />
                </div>
                : <div className={s.inputBox}>
                    <input
                        onBlur={updateStatus}
                        onChange={statusValue}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;