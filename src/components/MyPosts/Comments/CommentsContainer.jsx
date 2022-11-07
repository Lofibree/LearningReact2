import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Comments from './Comments';
import Comment from './Comment';
import { getCommentsThunkCreator } from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';


class CommentsAJAX extends React.Component {

    componentDidMount() {
        this.props.setComments(this.props.id);
    }

    render() {
        return (
            <>
                {this.props.isFetchingComm
                    ? <Preloader />
                    : <Comments
                        commentsEl={this.props.commentsEl}
                        id={this.props.id}
                    />
                }
            </>
        )
    }
}



const CommentsContainer = (props) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.profilePage.comments)
    const isFetchingComm = useSelector(state => state.profilePage.isFetchingComm)

    const setComments = (id) => {
        dispatch(getCommentsThunkCreator(id))
    }

    const commentsEl = comments.map(c =>
        <Comment
            name={c.name}
            email={c.email}
            body={c.body}
        />
    )

    return (
        <CommentsAJAX
            id={props.id}
            commentsEl={commentsEl}
            isFetchingComm={isFetchingComm}
            setComments={setComments}
        />
    );
};

export default CommentsContainer;