const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    // debugger;
    if (action.type === ADD_POST) {
        let newPost = {
            id: 10,
            message: state.newPostText,
            likesCounts: '0'
        };
        // debugger;
        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }

    return state;
};

export default profileReducer;