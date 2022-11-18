import  {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navBarReducer from "./navBarReducer";
import usersReduser from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import appReduser from "./appReducer";
import userPhotosReducer from "./userPhotosReducer";
import brBadReducer from './brBadReducer'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReduser,
    navBar: navBarReducer,
    auth: authReducer,
    app: appReduser,
    userPhotos: userPhotosReducer,
    breakingBad: brBadReducer
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window._store_ = store;


export default store;