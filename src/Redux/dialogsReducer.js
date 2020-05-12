const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Fred'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Ron'},
        {id: 4, name: 'Jack'},
        {id: 5, name: 'Greg'},

    ],
    messages: [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quia?'},
        {id: 4, message: 'Maybe. But you? :)'},
        {id: 5, message: ':D'},

    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return  {
                ...state,
                messages: [...state.messages,
                    {
                        id: 7,
                        message: state.newMessageText
                    }],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newTextMessage
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'});
export const updateNewMessageTextCreator = (newTextFromTextareaNewMessage) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    newTextMessage: newTextFromTextareaNewMessage
});

export default dialogsReducer;