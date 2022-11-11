import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPostsContainer'; 


const Profile = (props) => {
  // debugger;

  return (
    <div>
      <div className={s.content}>
        <ProfileInfo {...props}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;