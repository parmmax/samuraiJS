const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {

    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 7,
            message: state.newMessageText
        };

        state.messages.push(newMessage);
        state.newMessageText = '';

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newTextMessage;
    }

    return state;
};

export default dialogsReducer;