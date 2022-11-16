import  {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navBarReducer from "./navBarReducer";
import usersReduser from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
// import { reducer as formReducer } from 'react-final-form';
// import reducer from 'redux-final-form';
import appReduser from "./appReducer";
import userPhotosReducer from "./userPhotosReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReduser,
    navBar: navBarReducer,
    auth: authReducer,
    // form: formReducer,
    app: appReduser,
    userPhotos: userPhotosReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;


export default store;