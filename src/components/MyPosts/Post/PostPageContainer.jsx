import React from 'react';
import { getParticularPostThunkCreator } from '../../../redux/profileReducer';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import PostContainer from './PostContainer';
import CommentsContainer from '../Comments/CommentsContainer';
import { useParams } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';




class PostPageAJAX extends React.Component {

    componentDidMount() {
        this.props.setParticularPost(this.props.id)
    }
    render() {
        return (<>
            {this.props.isFetchingPost
                ? <Preloader />
                :
                <>
                    <PostContainer
                        setPostImg={this.props.setPostImg}
                        title={this.props.title}
                        body={this.props.body}
                        id={this.props.id}
                        postImg={this.props.postImg}
                    />
                    <CommentsContainer
                        id={this.props.id}
                    />
                </>
            }
        </>)
    }
}



const PostPageContainer = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const postImg = useSelector(state => state.profilePage.postImg)
    const title = useSelector(state => state.profilePage.partPost.title)
    const body = useSelector(state => state.profilePage.partPost.body)
    const isFetchingPost = useSelector(state => state.profilePage.isFetchingPost)

    const setParticularPost = (id) => {
        dispatch(getParticularPostThunkCreator(id))
    }


    return (
        <PostPageAJAX
            setParticularPost={setParticularPost}
            postImg={postImg}
            id={id}
            title={title}
            body={body}
            isFetchingPost={isFetchingPost}
        />
    );
};

export default PostPageContainer;