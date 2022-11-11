import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { getStatusThunkCreator } from '../../redux/profileReducer';



const ProfileContainer = () => {

  const login = useSelector(state => state.auth.login)
  const id = useSelector(state => state.auth.id)
  const email = useSelector(state => state.auth.email)
  const lookingForAJob = useSelector(state => state.auth.lookingForAJob)
  const photos = useSelector(state => state.auth.photos)
  const dispatch = useDispatch()

  const setStatus = (id) => {
    dispatch(getStatusThunkCreator(id))
  }

  return (
    <ProfileContainerAJAX
      login={login}
      id={id}
      email={email}
      lookingForAJob={lookingForAJob}
      photos={photos}
      setStatus={setStatus}
    /> 
  );
};

class ProfileContainerAJAX extends Component {
  componentDidMount() {
    this.props.setStatus(this.props.id)
  }
  render() {
    return (
      <Profile {...this.props}/>
    );
  }
}


export default compose(
  withAuthNavigate
)(ProfileContainer)