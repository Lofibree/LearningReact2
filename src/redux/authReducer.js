import { loginAPI, usersAPI } from "../components/api/api";


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_MY_PROFILE = 'samurai-network/auth/SET_MY_PROFILE';
const LOGIN = 'samurai-network/auth/LOGIN';

let initialState = {
    id: null, 
    email: null,
    login: null,
    isAuth: false,
    lookingForAJob: true,
    photos: {photos: {small: null, large: null}},
    loginData: {email: null, password: null}
}



const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case SET_MY_PROFILE: {
            return {
                ...state,
                ...action.data
            }
        }
        case LOGIN: {
            return {
                ...state,
                loginData: action.loginData
            }
        }
        default:
            return state;
    }
}




export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: {id, email, login, isAuth} })
export const setMyProfileAC  = (lookingForAJob, photos) => ({ type: SET_MY_PROFILE, data: {lookingForAJob, photos} });
export const loginAC  = (email, password) => ({ type: LOGIN, loginData: {email, password} });


export const getIsAuthThunkCreator = () => async (dispatch) => {
    // debugger
    let dataPromise = await loginAPI.setIsAuth();
    let { id, email, login, isAuth } = dataPromise.data;
    if (dataPromise.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true));
        let userProfilePromise = await usersAPI.setUserProfile(id);
        let { lookingForAJob, photos } = userProfilePromise;
        dispatch(setMyProfileAC(lookingForAJob, photos));
    }
}
export const loginThunkCreator = (formData) => async (dispatch) => {
    let { email, password } = formData;
    let loginDataPromise = await loginAPI.login(email, password);
    if (loginDataPromise.resultCode === 0) {
        dispatch(loginAC(email, password));
        dispatch(getIsAuthThunkCreator())
    }
}
export const logoutThunkCreator = () => async (dispatch) => {
    let logoutDataPromise = await loginAPI.logout();
    if (logoutDataPromise.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}
 


export default authReduser; 