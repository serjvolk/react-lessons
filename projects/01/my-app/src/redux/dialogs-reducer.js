const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageTextVal = action.messageText;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                msg: state.newMessageTextVal,
                typeMessage: false
            };
            state.messages.push(newMessage);
            state.newMessageTextVal = "";
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export default dialogsReducer;