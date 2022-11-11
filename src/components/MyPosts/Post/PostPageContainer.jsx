import React, { useEffect } from 'react';
import { getParticularPostThunkCreator } from '../../../redux/profileReducer';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import PostContainer from './PostContainer';
import CommentsContainer from '../Comments/CommentsContainer';
import { useParams } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';


const PostPageContainer = () => {

    useEffect(() => {
        dispatch(getParticularPostThunkCreator(id))
    }, [])

    const { id } = useParams();
    const dispatch = useDispatch();

    const postImg = useSelector(state => state.profilePage.postImg)
    const title = useSelector(state => state.profilePage.partPost.title)
    const body = useSelector(state => state.profilePage.partPost.body)
    const isFetchingPost = useSelector(state => state.profilePage.isFetchingPost)

    return (
        <>
            {isFetchingPost
                ? <Preloader />
                :
                <>
                    <PostContainer
                        title={title}
                        body={body}
                        id={id}
                        postImg={postImg}
                    />
                    <CommentsContainer
                        id={id}
                    />
                </>
            }
        </>
    );
};

export default PostPageContainer;