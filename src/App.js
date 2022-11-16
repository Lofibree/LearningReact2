import './App.scss';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import ProfileContainer from './components/MyPosts/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import DialogContainer from './components/Dialogs/Dialog/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import PostPageContainer from './components/MyPosts/Post/PostPageContainer';
import UserContainer from './components/Users/UserContainer/UserContainer';
import HeaderContainer from './components/Layout/Header/HeaderContainer';
import Login from './components/Login/Login';
import UserPhotosContainer from './components/UserPhotos/UserPhotosContainer';
import { initializeApp } from './redux/appReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';


const App = () => {

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  const initialized = useSelector(state => state.app.initialized);
  const dispatch = useDispatch();

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className='body'>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Footer />
        <div className="app-content">
          <Routes>
            <Route path='/profile'
              element={<ProfileContainer />}
            />
            <Route path='/profile/:id'
              element={<PostPageContainer />}
            />
            <Route path='/dialogs'
              element={<DialogsContainer />}
            />
            <Route path='/dialogs/:id'
              element={<DialogContainer />}
            />
            <Route path='/users'
              element={<UsersContainer />}
            />
            <Route path='/users/:id'
              element={<UserContainer />}
            />
            <Route path='/login'
              element={<Login />}
            />
            <Route path='/photos/:id'
              element={<UserPhotosContainer />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};


export default App;

