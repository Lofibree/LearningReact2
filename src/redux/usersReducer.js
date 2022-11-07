import { usersAPI } from "../components/api/api";
import { postsAPI } from "../components/api/api";

const SET_FOLLOW_UNFOLLOW = 'SET_FOLLOW_UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER = 'SET_USER';
const SET_USER_IMG_CARD = 'SET_USER_IMG_CARD';
const TOGGLE_IS_FETCHING_USER = 'TOGGLE_IS_FETCHING_USER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    usersBank: [], 
    user: {photos: {small: null, large: null}},
    userStatus: 'someStatus',
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    isFetchingUser: false,
    status: 'no status',
    followingInProgress: []
}
 


const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOW_UNFOLLOW: {
            let stateCopy = {
                ...state,
                usersBank: [...state.usersBank]
            }
            let neededUserIndex = stateCopy.usersBank.findIndex(user => user.id === action.id)
            stateCopy.usersBank[neededUserIndex] = {...state.usersBank[neededUserIndex]}
            stateCopy.usersBank[neededUserIndex].followed = action.isFollowedResault
            return stateCopy
        }
        case SET_USERS: {
            return { 
                ...state, 
                usersBank: action.newUsers
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            // debugger;
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_USER: {
            // debugger;
            return {
                ...state,
                user: action.user
            }
        }
        case SET_USER_IMG_CARD: {
            return {
                ...state,
                userImgCard: action.userImgCard
            }
        }
        case TOGGLE_IS_FETCHING_USER: {
            return {
                ...state,
                isFetchingUser: action.isFetchingUser
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            // debugger;
            return {
                ...state,
                followingInProgress: action.followingInProgress 
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        case SET_USER_STATUS: {
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




export const setFollowUnFollowAC = (isFollowedResault, id) => ({ type: SET_FOLLOW_UNFOLLOW, isFollowedResault, id });
export const setUsersAC = (newUsers) => ({ type: SET_USERS, newUsers: newUsers });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserAC = (user) => ({ type: SET_USER, user });
export const setIsFetchingUserAC = (isFetchingUser) => ({ type: TOGGLE_IS_FETCHING_USER, isFetchingUser });
export const toggleFollowingProgressAC = (followingInProgress, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, id });
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status })


export const getUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        // debugger;
        dispatch(setIsFetchingAC(true));
        usersAPI.setUsers(pageSize, currentPage)
            .then(data => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount));
            })
    }
}
export const getOnPageChangedUsersThunkCreator = (pageSize, pageNumber) => {
    return (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(setCurrentPageAC(pageNumber));
        usersAPI.onPageSetUsers(pageSize, pageNumber)
            .then(data => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(data.items));
            })
    }
}
export const setFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.setFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(setFollowUnFollowAC(true, userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId));
        })
    }
}
export const setUnFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.setUnFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(setFollowUnFollowAC(false, userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId));
        })
    }
}
export const getUserThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFetchingUserAC(true))
        usersAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setIsFetchingUserAC(false))
                dispatch(setUserAC(data));
            })
    }
}
export const getUserStatusThunkCreator = (id) => {
    return (dispatch) => {
        postsAPI.getStatus(id)
            .then(data => {
                // debugger;
                dispatch(setUserStatusAC(data));
            })
    }
}



export default usersReduser; 