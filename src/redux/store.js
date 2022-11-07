import messagesReducer from "./messagesReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";


let store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi, how are you', editPostText: 'edit post', likeCount: 12, time: '08:57'  },
                { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '08:55' },
                { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '08:54' },
                { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '07:57' },
                { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '02:53' },
            ],
            newPostText: 'it-kamasutra',
        },
        messagePage: {
            messages: [
                { id: 0, message: 'hi', editMessText: 'edit mess', time: '12:00' },
                { id: 1, message: 'how are you', editMessText: 'edit mess', time: '12:25' },
                { id: 2, message: 'fuck you', editMessText: 'edit mess', time: '12:30' },
            ],
            newMessText: 'type mess',
            dialogs: [
                // { id: 0, name: 'Sergey' },
                { id: 0, name: 'lofi', href: 'https://vk.com/lofibree' },
                // { id: 2, name: 'seva' },
                { id: 1, name: 'rock', href: 'https://vk.com/rockkom21' },
                { id: 2, name: 'seva', href: 'https://vk.com/rockkom21' },
                // { id: 4, name: 'dggnjsdx' }
            ]
        },
        navBar: [
            { id: 0, name: 'Ricardo' },
            { id: 1, name: 'Milos' },
            { id: 2, name: 'yo' },
        ]
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) { 

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messagesReducer(this._state.messagePage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);

    }
}


// ACTION CREATORS


export default store;


// store - OOP 