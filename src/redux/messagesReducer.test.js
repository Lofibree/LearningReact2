import messagesReducer, { addDialogAC, deleteMessAC } from "./messagesReducer";


let state = {
    dialogs: [
        { id: 0, name: 'lofi', href: 'https://vk.com/lofibree' },
        { id: 1, name: 'rock', href: 'https://vk.com/rockkom21' },
        { id: 2, name: 'seva', href: 'https://vk.com/rockkom21' },
    ],
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
}
test('add new message', () => {
    let action = addDialogAC('svsfsd');
    let newState = messagesReducer(state, action);
    expect(newState.dialogs.length).toBe(4)
  });
  
test("after deleting length shouldn't decrement if id is incorrect", () => {
    let action = deleteMessAC('h');
    let newState = messagesReducer(state, action);
    expect(newState.messagesBank.length).toBe(9)
  });
  