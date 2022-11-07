import React from 'react';
import Post from './Post';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux/es/hooks/useDispatch'
import { deletePostAC, deletePostThunkCreator } from '../../../redux/profileReducer';


const PostContainer = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch() 

    // const deletePost = (id) => {
    //     dispatch(deletePostThunkCreator(id))
    // } 

    const goBack = () => {
        navigate('/profile')
    }

    return (
        <Post 
            {...props}
            // deletePost={deletePost}
            goBack={goBack}
        />
    );
};

export default PostContainer;