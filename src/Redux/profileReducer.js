const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi! How\'re you?', likesCounts: '15 '},
        {id: 2, message: 'It\'s my first post', likesCounts: '20 '},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
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
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});

export default profileReducer;