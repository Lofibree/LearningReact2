import { photosAPI } from "../components/api/api";

const GET_USER_PHOTOS = 'GET_USER_PHOTOS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    photos: [],
    isFetching: true
}



const userPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PHOTOS: {
            return {
                ...state,
                photos: [...action.photos]
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}





export const getUserPhotosAC = (photos) => ({ type: GET_USER_PHOTOS, photos})
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})



export const getUserPhotosTC = () => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        photosAPI.getUserPhotos()
        .then(data => {
            dispatch(getUserPhotosAC(data))
            setTimeout(() => {dispatch(toggleIsFetchingAC(false))}, 2000)
        })
    } 
}


export default userPhotosReducer; 