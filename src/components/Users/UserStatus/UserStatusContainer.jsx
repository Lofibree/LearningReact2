import React from 'react';
import UserStatus from './UserStatus';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getUserStatusThunkCreator } from '../../../redux/usersReducer';


class UserStatusAJAX extends React.Component {
    componentDidMount() {
        this.props.setUserStatus(this.props.id);
    }
    render() {
        return (
            <UserStatus
                status={this.props.status}
                {...this.props}
            />
        );
    }

};




const UserStatusContainer = (props) => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.usersPage.status);

    const setUserStatus = (id) => {
        dispatch(getUserStatusThunkCreator(id))
    }
    return (
        <UserStatusAJAX
            setUserStatus={setUserStatus}
            status={status}
            id={props.id}
            {...props}
        />
    )
}


export default UserStatusContainer;