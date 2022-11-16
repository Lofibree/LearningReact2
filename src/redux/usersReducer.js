import { usersAPI } from "../components/api/api";
import { postsAPI } from "../components/api/api";

const SET_FOLLOW_UNFOLLOW = 'samurai-network/usersPage/SET_FOLLOW_UNFOLLOW';
const SET_USERS = 'samurai-network/usersPage/SET-USERS';
const SET_CURRENT_PAGE = 'samurai-network/usersPage/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-network/usersPage/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'samurai-network/usersPage/TOGGLE_IS_FETCHING';
const SET_USER = 'samurai-network/usersPage/SET_USER';
const SET_USER_IMG_CARD = 'samurai-network/usersPage/SET_USER_IMG_CARD';
const TOGGLE_IS_FETCHING_USER = 'samurai-network/usersPage/TOGGLE_IS_FETCHING_USER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-network/usersPage/TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_USER_STATUS = 'samurai-network/usersPage/SET_USER_STATUS';


let initialState = {
    usersBank: [],
    user: { photos: { small: null, large: null } },
    userStatus: 'someStatus',
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    isFetchingUser: false,
    isFollowed: false,
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
            stateCopy.usersBank[neededUserIndex] = { ...state.usersBank[neededUserIndex] }
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
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        case SET_USER_STATUS: {
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
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserAC = (user) => ({ type: SET_USER, user });
export const setIsFetchingUserAC = (isFetchingUser) => ({ type: TOGGLE_IS_FETCHING_USER, isFetchingUser });
export const toggleFollowingProgressAC = (followingInProgress, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, id });
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status })


export const getUsersThunkCreator = (pageSize, currentPage) => async (dispatch) => {
    dispatch(setIsFetchingAC(true));
    let setUsersPromise = await usersAPI.setUsers(pageSize, currentPage);
    dispatch(setIsFetchingAC(false));
    dispatch(setUsersAC(setUsersPromise.items));
    dispatch(setTotalUsersCountAC(setUsersPromise.totalCount));
}

export const getOnPageChangedUsersThunkCreator = (pageSize, pageNumber) => async (dispatch) => {
    dispatch(setIsFetchingAC(true));
    dispatch(setCurrentPageAC(pageNumber));
    let onPageSetUsersPromise = await usersAPI.onPageSetUsers(pageSize, pageNumber);
    dispatch(setIsFetchingAC(false));
    dispatch(setUsersAC(onPageSetUsersPromise.items));
}
const followUnfollowFlow = async (dispatch, userId, resault, apiMethod) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    let setFollowPromise = await apiMethod(userId);
    if (setFollowPromise.resultCode === 0) {
        dispatch(setFollowUnFollowAC(resault, userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId));
}
export const setFollowThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.setFollow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, true, apiMethod)
}
export const setUnFollowThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.setUnFollow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, false, apiMethod)
}

export const getUserThunkCreator = (userId) => async (dispatch) => {
    debugger;
    dispatch(setIsFetchingUserAC(true))
    let setUserProfilePromise = await usersAPI.setUserProfile(userId);
    dispatch(setIsFetchingUserAC(false))
    dispatch(setUserAC(setUserProfilePromise));
}
 
export const getUserStatusThunkCreator = (id) => async (dispatch) => {
    let getStatusPromise = await postsAPI.getStatus(id);
    dispatch(setUserStatusAC(getStatusPromise));
}




export default usersReduser; 