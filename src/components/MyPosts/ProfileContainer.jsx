import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';



const ProfileContainer = () => {

  const login = useSelector(state => state.auth.login)
  const id = useSelector(state => state.auth.id)
  const email = useSelector(state => state.auth.email)
  const lookingForAJob = useSelector(state => state.auth.lookingForAJob)
  const photos = useSelector(state => state.auth.photos)

  return (
    <Profile
      login={login}
      id={id}
      email={email}
      lookingForAJob={lookingForAJob}
      photos={photos}
    /> 
  );
};


export default compose(
  withAuthNavigate
)(ProfileContainer)