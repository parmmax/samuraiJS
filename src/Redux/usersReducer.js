const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How\'re you?', likesCounts: '15 '},
        {id: 2, message: 'It\'s my first post', likesCounts: '20 '},
    ],
    newPostText: ''
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {id: 10,
                        message: state.newPostText,
                        likesCounts: '0'}],
                newPostText: ''

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText};
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: 'ADD_POST'});
export const updateNewPostTextActionCreator = (newTextFromTextareaNewPost) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: newTextFromTextareaNewPost
});

export default userReducer;