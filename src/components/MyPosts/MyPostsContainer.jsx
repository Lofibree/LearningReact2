import React, { useEffect } from 'react';
import PostItem from './Post/PostItem/PostItem';
import MyPosts from './MyPosts';
import { getPostsThunkCreator, getOnPagePostsThunkCreator, addNewPostAC } from '../../redux/profileReducer';
import { connect } from 'react-redux/es/exports';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getIsFetching, getPosts } from '../../redux/profileSelectors';


const MyPostsContainerEff = (props) => {

  useEffect(() => {
    props.getPostsThunkCreator(props.currentPage)
  }, [])

  const onPageChanged = (pageSize, pageNumber) => {
    props.getOnPagePostsThunkCreator(pageSize, pageNumber);
  }

  return (
    <>
      {props.isFetching
        ? <Preloader />
        : <MyPosts
          onPageChanged={onPageChanged}
          addNewPostAC={props.addNewPostAC}
          postsEl={props.postsEl}
          currentPage={props.currentPage}
        />
      }
    </>
  );
};


let mapStateToProps = (state) => {
  return {
    postsEl: getPosts(state).map(p => <PostItem
      id={p.id}
      body={p.body}
      title={p.title}
      index={getPosts(state).indexOf(p)}
    />),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state)
  }
}


export default connect(mapStateToProps,
  { getPostsThunkCreator, getOnPagePostsThunkCreator, addNewPostAC })(MyPostsContainerEff);