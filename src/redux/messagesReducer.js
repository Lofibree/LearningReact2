const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const DELETE_MESS = 'DELETE-MESS';
const UPDATE_EDIT_MESS_TEXT = 'UPDATE-EDIT-MESS-TEXT';
const UPDATE_EDIT_MESS_INIT = 'UPDATE-EDIT-MESS-INIT';
const COMPLETE_MESS_EDIT = 'COMPLETE-MESS-EDIT';
const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_ADD_DIALOG_TEXT ='UPDATE-ADD-DIALOG-TEXT';



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

// debugger;
// debugger;

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMess = {
                id: action.id + 1,
                message: action.newMessageBody,
                // time: action.timeMess,  // TIME MANAGEMENT
                ownerDialog: state.dialogs[action.id].name
            }
            return {
                ...state,
                messagesBank: [...state.messagesBank, newMess],
                // newMessText: ''
            };
        }
        // case UPDATE_NEW_MESS_TEXT: {
        //     return {
        //         ...state,
        //         newMessText: action.newText
        //     };
        // }
        case DELETE_MESS: {
            let stateCopy = {...state};
            stateCopy.messagesBank = [...state.messagesBank];
            stateCopy.messagesBank[action.index] = {...state.messagesBank[action.index]}; // ВАЩЕ ХЗ, УДАЛЯЕТ ЛИ SPLICE ОБЪЕКТ ИЛИ ССЫЛКУ НА ОБЪЕКТ
            stateCopy.messagesBank.splice(action.index, 1);
            return stateCopy;
        }
        // case UPDATE_EDIT_MESS_TEXT: {
        //     // debugger;

        //     let stateCopy = {...state};
        //     stateCopy.messagesBank = [...state.messagesBank];
        //     stateCopy.messagesBank[action.index] = {...state.messagesBank[action.index]};
        //     stateCopy.messagesBank[action.index].editMessText = action.newText;
        //     return stateCopy;
        // }
        // case UPDATE_EDIT_MESS_INIT: {
        //     // debugger;
            
        //     let stateCopy = {...state};
        //     stateCopy.messagesBank = [...state.messagesBank];
        //     stateCopy.messagesBank[action.index] = {...state.messagesBank[action.index]};
        //     stateCopy.messagesBank[action.index].editMessText = stateCopy.messagesBank[action.index].message;
        //     return stateCopy;
        // }
        // case COMPLETE_MESS_EDIT: {
        //     // debugger;
        //     let stateCopy = {...state};
        //     stateCopy.messagesBank = [...state.messagesBank];
        //     stateCopy.messagesBank[action.index] = {...state.messagesBank[action.index]};
        //     stateCopy.messagesBank[action.index].message = stateCopy.messagesBank[action.index].editMessText;
        //     return stateCopy;
        // }
        case ADD_DIALOG: {
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            // stateCopy.dialogs = [...state.dialogs].map(function (d) {return {...d}});  // СОМНИТЕЛЬНО, ВЕДЬ Я ЖЕ НЕ ИЗМЕНЯЮ, А ЧИТАЮ
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
        // case UPDATE_ADD_DIALOG_TEXT: {
        //     return {
        //         ...state,
        //         newDialogText: action.newText
        //     };
        // }
        default:
            return state;

    }
}



export const addMessAC = (newMessageBody, id) => ({ type: ADD_MESSAGE, newMessageBody, id });
export const onMessChangeAC = (text) => ({ type: UPDATE_NEW_MESS_TEXT, newText: text });
export const editMessAC = (index) => ({ type: UPDATE_EDIT_MESS_INIT, index: index });
export const onEditChangeMessAC = (text, index) => ({ type: UPDATE_EDIT_MESS_TEXT, newText: text, index: index });
export const completeEditMessAC = (index) => ({ type: COMPLETE_MESS_EDIT, index: index });
export const deleteMessAC = (index) => ({ type: DELETE_MESS, index: index });
export const addDialogAC = (newDialogBody) => ({ type: ADD_DIALOG, newDialogBody });
export const onAddDialogChangeAC = (text) => ({ type: UPDATE_ADD_DIALOG_TEXT, newText: text })

export default messagesReducer;