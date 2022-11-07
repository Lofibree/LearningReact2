// import { stopSubmit } from "redux-form";
import { loginAPI, usersAPI } from "../components/api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const LOGIN = 'LOGIN';

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


export const getIsAuthThunkCreator = () => {
    return (dispatch) => {
        return loginAPI.setIsAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login, isAuth} = data.data; 
                dispatch(setAuthUserData(id, email, login, true));
                usersAPI.setUserProfile(id).then(data => {
                    let {lookingForAJob, photos} = data;
                    dispatch(setMyProfileAC(lookingForAJob, photos));
                })
            }
        })
    } 
} 
export const loginThunkCreator = (formData) => (dispatch) => {
    let {email, password} = formData;
    loginAPI.login(email, password).then(data => {
        if (data.resultCode === 0) {
            dispatch(loginAC(email, password))
            dispatch(getIsAuthThunkCreator())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            // dispatch(stopSubmit('login', { _error: message }))
        }
    })
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        loginAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    } 
} 


export default authReduser; 