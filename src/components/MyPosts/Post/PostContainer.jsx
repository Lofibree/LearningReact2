import React from 'react';
import Post from './Post';
import { useNavigate } from 'react-router-dom';


const PostContainer = (props) => {

    const navigate = useNavigate();
    
    const goBack = () => {
        navigate('/profile')
    }

    return (
        <Post 
            {...props}
            goBack={goBack}
        />
    );
};

export default PostContainer;