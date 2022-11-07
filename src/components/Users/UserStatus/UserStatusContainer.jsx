import React from 'react';
import UserStatus from './UserStatus';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getUserStatusThunkCreator } from '../../../redux/usersReducer';


class UserStatusAJAX extends React.Component {
    componentDidMount() {
        // debugger;

        this.props.setUserStatus(this.props.id);
    }
    render() {
        return (
            <UserStatus
                // updateStatus={this.props.updateStatus}
                status={this.props.status}
                {...this.props}
            />
        );
    }

};




const UserStatusContainer = (props) => {
    // debugger;

    const dispatch = useDispatch();
    const status = useSelector(state => state.usersPage.status);

    const setUserStatus = (id) => {
        // debugger;

        dispatch(getUserStatusThunkCreator(id))
    }
    // const updateStatus = (newStatus) => {
    //     dispatch(updateStatusThunkCreator(newStatus))
    // }
    return (
        <UserStatusAJAX
            setUserStatus={setUserStatus}
            // updateStatus={updateStatus}
            status={status}
            id={props.id}
            {...props}
        />
    )
}


export default UserStatusContainer;