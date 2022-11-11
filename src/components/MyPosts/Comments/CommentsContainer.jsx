import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Comments from './Comments';
import Comment from './Comment';
import { getCommentsThunkCreator } from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';


const CommentsContainer = (props) => {

    useEffect(() => {
        dispatch(getCommentsThunkCreator(props.id))
    }, [])

    const dispatch = useDispatch();
    const comments = useSelector(state => state.profilePage.comments)
    const isFetchingComm = useSelector(state => state.profilePage.isFetchingComm)

    const commentsEl = comments.map(c =>
        <Comment
            name={c.name}
            email={c.email}
            body={c.body}
        />
    )

    return (
        <>
            {isFetchingComm
                ? <Preloader />
                : <Comments
                    commentsEl={commentsEl}
                    id={props.id}
                />
            }
        </>
    )
};

export default CommentsContainer;