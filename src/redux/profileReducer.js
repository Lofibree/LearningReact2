import { postsAPI } from "../components/api/api";

const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_POSTS = 'SET_POSTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_COMMENTS = 'SET_COMMENTS';
const TOGGLE_IS_FETCHING_COMM = 'TOGGLE_IS_FETCHING_COMM';
const SET_POST_IMG = 'SET_POST_IMG';
const SET_PARTICULAR_POST = 'SET_PARTICULAR_POST';
const TOGGLE_IS_FETCHING_POST = 'TOGGLE_IS_FETCHING_POST';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [],
    comments: [],
    partPost: {title: 'title', body: 'body'},
    currentPage: 1,
    isFetching: true,
    isFetchingComm: true,
    isFetchingPost: true,
    status: '',
    isPostDeleted: false,
    newPostText: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST: {
            // debugger;

            let newPost = {
                id: state.posts.length + 1,
                title: action.newPostAuthor,
                body: action.newPostBody
            }
            // debugger;
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: action.newPosts
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_COMMENTS: {
            return {
                ...state,
                comments: action.newComments
            }
        }
        case TOGGLE_IS_FETCHING_COMM: {
            return {
                ...state,
                isFetchingComm: action.isFetchingComm
            }
        }
        case SET_POST_IMG: {
            return {
                ...state,
                postImg: action.postImg
            }
        }
        case SET_PARTICULAR_POST: {
            let stateCopy = {
                ...state,
                partPost: action.post
            }
            return stateCopy
        }
        case TOGGLE_IS_FETCHING_POST: {
            return {
                ...state,
                isFetchingPost: action.isFetchingPost
            }
        }
        case SET_STATUS: {
            // debugger;
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;

    }

}

//  ВАЩЕ ХЗ КОНЕЧНО С ЭТИМИ КОПИРОВАНИЯМИ - НАДО ЛИ ИХ ДЕЛАТЬ НА КАЖДЫЙ ЧИХ ИЛИ НЕТ?


// export const deletePostAC = (isPostDeleted) => ({ type: DELETE_POST, isPostDeleted });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setPosts = (newPosts) => ({ type: SET_POSTS, newPosts })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setCommentsAC = (newComments) => ({ type: SET_COMMENTS, newComments })
export const setIsFetchingCommAC = (isFetchingComm) => ({ type: TOGGLE_IS_FETCHING_COMM, isFetchingComm })
export const setPostImgAC = (postImg) => ({ type: SET_POST_IMG, postImg })
export const setParticularPostAC = (post) => ({ type: SET_PARTICULAR_POST, post })
export const setIsFetchingPostAC = (isFetchingPost) => ({ type: TOGGLE_IS_FETCHING_POST, isFetchingPost })
export const setStatusAC = (status) => ({ type: SET_STATUS, status })
export const addNewPostAC = (newPostBody, newPostAuthor) => ({ type: ADD_NEW_POST, newPostBody, newPostAuthor })



export const getPostsThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
    postsAPI.setPosts(currentPage)
      .then(data => {
        dispatch(setIsFetching(false))
        dispatch(setPosts(data))
      })
    }
}
export const getOnPagePostsThunkCreator = (pageNumber) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        postsAPI.setOnPagePosts(pageNumber)
          .then(data => {
            dispatch(setIsFetching(false));
            dispatch(setCurrentPage(pageNumber));
            dispatch(setPosts(data));
          })
    }
}
export const getParticularPostThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setIsFetchingPostAC(true))
        postsAPI.setParticularPost(id)
            .then(data => {
                dispatch(setIsFetchingPostAC(false));
                dispatch(setParticularPostAC(data));
            })
    }
}
export const getCommentsThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setIsFetchingCommAC(true));
        postsAPI.setComments(id)
            .then(data => {
                dispatch(setIsFetchingCommAC(false));
                dispatch(setCommentsAC(data))
            })
    }
}
export const getStatusThunkCreator = (id) => {
    return (dispatch) => {
        postsAPI.getStatus(id)
            .then(data => {
                dispatch(setStatusAC(data));
            })
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        postsAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatusAC(status));
                }
            })
    }
}
// export const deletePostThunkCreator = (id) => {
//     return (dispatch) => {
//         postsAPI.deletePost(id)
//             .then(data => {
//                 debugger;
//                 if (data.resultCode === 0) {
//                     dispatch(deletePostAC(data));
//                     alert(data)
//                 }
//             })
//     }
// }



export default profileReducer; 