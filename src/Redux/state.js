import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How\'re you?', likesCounts: '15 '},
                {id: 2, message: 'It\'s my first post', likesCounts: '20 '},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },

    dispatch(action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._callSubscribe(this._state);
    },

    _callSubscribe() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

};

export const addPostActionCreator = () => ({type: 'ADD_POST'});
export const updateNewPostTextActionCreator = (newTextFromTextareaNewPost) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: newTextFromTextareaNewPost
});

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'});
export const updateNewMessageTextCreator = (newTextFromTextareaNewMessage) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    newTextMessage: newTextFromTextareaNewMessage
});

export default store;
window.store = store;