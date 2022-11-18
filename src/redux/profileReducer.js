import { postsAPI } from "../components/api/api";

const ADD_NEW_POST = 'samurai-network/profilePage/ADD_NEW_POST';
const SET_CURRENT_PAGE = 'samurai-network/profilePage/SET_CURRENT_PAGE';
const SET_POSTS = 'samurai-network/profilePage/SET_POSTS';
const TOGGLE_IS_FETCHING = 'samurai-network/profilePage/TOGGLE_IS_FETCHING';
const SET_COMMENTS = 'samurai-network/profilePage/SET_COMMENTS';
const TOGGLE_IS_FETCHING_COMM = 'samurai-network/profilePage/TOGGLE_IS_FETCHING_COMM';
const SET_POST_IMG = 'samurai-network/profilePage/SET_POST_IMG';
const SET_PARTICULAR_POST = 'samurai-network/profilePage/SET_PARTICULAR_POST';
const TOGGLE_IS_FETCHING_POST = 'samurai-network/profilePage/TOGGLE_IS_FETCHING_POST';
const SET_STATUS = 'samurai-network/profilePage/SET_STATUS';


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
            let newPost = {
                id: state.posts.length + 1,
                title: action.newPostAuthor,
                body: action.newPostBody
            }
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



export const getPostsThunkCreator = (currentPage) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let setPostsPromise = await postsAPI.setPosts(currentPage);
    dispatch(setIsFetching(false))
    dispatch(setPosts(setPostsPromise))
}

export const getOnPagePostsThunkCreator = (pageSize, pageNumber) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let setOnPagePosts = await postsAPI.setOnPagePosts(pageSize, pageNumber);
    dispatch(setIsFetching(false));
    dispatch(setCurrentPage(pageNumber));
    dispatch(setPosts(setOnPagePosts));
}
export const getParticularPostThunkCreator = (id) => async (dispatch) => {
    dispatch(setIsFetchingPostAC(true))
    let setParticularPostPromise = await postsAPI.setParticularPost(id);
    dispatch(setIsFetchingPostAC(false));
    dispatch(setParticularPostAC(setParticularPostPromise));
}

export const getCommentsThunkCreator = (id) => async (dispatch) => {
    dispatch(setIsFetchingCommAC(true));
    let setCommentsPromise = await postsAPI.setComments(id);
    dispatch(setIsFetchingCommAC(false));
    dispatch(setCommentsAC(setCommentsPromise))
}
export const getStatusThunkCreator = (id) => async (dispatch) => {
    let getStatusPromise = await postsAPI.getStatus(id);
    dispatch(setStatusAC(getStatusPromise))
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let updateStatusPromise = await postsAPI.updateStatus(status)
    if (updateStatusPromise.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
}



export default profileReducer; 