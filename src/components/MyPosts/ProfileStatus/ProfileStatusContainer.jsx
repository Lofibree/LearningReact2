import React from 'react';
import ProfileStatus from './ProfileStatus'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { updateStatusThunkCreator } from '../../../redux/profileReducer';



// class ProfileStatusAJAX extends React.Component {
//     render() {
//         return (
//             <ProfileStatus
//                 updateStatus={this.props.updateStatus}
//                 status={this.props.status}
//                 {...this.props}
//             />
//         );
//     }

// };




const ProfileStatusContainer = (props) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.profilePage.status);

    const updateStatus = (newStatus) => {
        dispatch(updateStatusThunkCreator(newStatus))
    }
    return (
        <ProfileStatus
            updateStatus={updateStatus}
            status={status}
            id={props.id}
            {...props}
        />
    )
}


export default ProfileStatusContainer;