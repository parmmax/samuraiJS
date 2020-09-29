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
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'Progressively incubate innovative niches with alternative intellectual capital. Intrinsicly recaptiualize exceptional models without market-driven supply chains. Distinctively.'},
        {id: 4, message: 'Seamlessly harness 24/7 best practices.'},
        {id: 5, message: 'Quickly parallel task premier channels after multimedia based "outside the.'},

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
                        id: state.dialogs.id + 1,
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