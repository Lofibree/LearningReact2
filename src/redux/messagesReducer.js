const ADD_MESSAGE = 'samurai-network/messagePage/ADD-MESSAGE';
const UPDATE_NEW_MESS_TEXT = 'samurai-network/messagePage/UPDATE-NEW-MESS-TEXT';
const DELETE_MESS = 'samurai-network/messagePage/DELETE-MESS';
const UPDATE_EDIT_MESS_TEXT = 'samurai-network/messagePage/UPDATE-EDIT-MESS-TEXT';
const UPDATE_EDIT_MESS_INIT = 'samurai-network/messagePage/UPDATE-EDIT-MESS-INIT';
const COMPLETE_MESS_EDIT = 'samurai-network/messagePage/COMPLETE-MESS-EDIT';
const ADD_DIALOG = 'samurai-network/messagePage/ADD-DIALOG';
const UPDATE_ADD_DIALOG_TEXT ='samurai-network/messagePage/UPDATE-ADD-DIALOG-TEXT';



let initialState = {
    messagesBank:  [
        { id: 0, message: 'hi', editMessText: 'edit mess', time: '12:00', ownerDialog: 'lofi' },
        { id: 1, message: 'how are you', editMessText: 'edit mess', time: '12:25', ownerDialog: 'lofi' },
        { id: 2, message: 'fuck you', editMessText: 'edit mess', time: '12:30', ownerDialog: 'lofi' },
        { id: 3, message: 'freddie', editMessText: 'edit mess', time: '13:00', ownerDialog: 'lofi' },
        { id: 4, message: 'yellow', editMessText: 'edit mess', time: '13:12', ownerDialog: 'lofi' },
        { id: 5, message: 'blue', editMessText: 'edit mess', time: '13:38', ownerDialog: 'rock' },
        { id: 6, message: 'red', editMessText: 'edit mess', time: '18:00', ownerDialog: 'rock' },
        { id: 7, message: 'white', editMessText: 'edit mess', time: '19:03', ownerDialog: 'seva' },
        { id: 8, message: 'black', editMessText: 'edit mess', time: '20:46', ownerDialog: 'seva' },
    ],
    newMessText: 'type mess',
    dialogs: [
        { id: 0, name: 'lofi', href: 'https://vk.com/lofibree' },
        { id: 1, name: 'rock', href: 'https://vk.com/rockkom21' },
        { id: 2, name: 'seva', href: 'https://vk.com/rockkom21' },
    ],
    newDialogText: 'add name'
}




const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMess = {
                id: action.id + 1,
                message: action.newMessageBody,
                ownerDialog: state.dialogs[action.id].name
            }
            return {
                ...state,
                messagesBank: [...state.messagesBank, newMess],
            };
        }
        case DELETE_MESS: {
            let stateCopy = {
                ...state,
                messagesBank: [...state.messagesBank]
            };
            let neededIndex = stateCopy.messagesBank.findIndex(el => el.id === action.id)
            stateCopy.messagesBank[neededIndex] = {...state.messagesBank[neededIndex]}; // ВАЩЕ ХЗ, УДАЛЯЕТ ЛИ SPLICE ОБЪЕКТ ИЛИ ССЫЛКУ НА ОБЪЕКТ
            stateCopy.messagesBank.splice(neededIndex, 1);
            return stateCopy;
        }
        case ADD_DIALOG: {
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            let isDialogExist = stateCopy.dialogs.some(d => d.name === action.newDialogBody);
            if (isDialogExist === false) {
                let newDialog = {
                    id: stateCopy.dialogs.length, 
                    name: action.newDialogBody,
                }
                stateCopy.dialogs.push(newDialog);
            } else {
                window.alert('This dialog already exist')
            }
            return stateCopy;
        }
        default:
            return state;

    }
}



export const addMessAC = (newMessageBody, id) => ({ type: ADD_MESSAGE, newMessageBody, id });
export const onMessChangeAC = (text) => ({ type: UPDATE_NEW_MESS_TEXT, newText: text });
export const editMessAC = (index) => ({ type: UPDATE_EDIT_MESS_INIT, index: index });
export const onEditChangeMessAC = (text, index) => ({ type: UPDATE_EDIT_MESS_TEXT, newText: text, index: index });
export const completeEditMessAC = (index) => ({ type: COMPLETE_MESS_EDIT, index: index });
export const deleteMessAC = (id) => ({ type: DELETE_MESS, id });
export const addDialogAC = (newDialogBody) => ({ type: ADD_DIALOG, newDialogBody });
export const onAddDialogChangeAC = (text) => ({ type: UPDATE_ADD_DIALOG_TEXT, newText: text })

export default messagesReducer;