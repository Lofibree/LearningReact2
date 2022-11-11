import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { getStatusThunkCreator } from '../../redux/profileReducer';



const ProfileContainer = () => {

  useEffect(() => {
    dispatch(getStatusThunkCreator(id))
  }, [])

  const login = useSelector(state => state.auth.login)
  const id = useSelector(state => state.auth.id)
  const email = useSelector(state => state.auth.email)
  const lookingForAJob = useSelector(state => state.auth.lookingForAJob)
  const photos = useSelector(state => state.auth.photos)
  const dispatch = useDispatch()

  return (
    <Profile
      login={login}
      id={id}
      email={email}
      lookingForAJob={lookingForAJob}
      photos={photos}
    /> 
  )
};

export default compose(
  withAuthNavigate
)(ProfileContainer)