import {toggleIsFetching} from "./usersReducer";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
    posts: [
        {
            id: 1,
            message: 'It\'s my first post',
            likesCounts: '5 '
        },
        {
            id: 2,
            message: 'Efficiently leverage existing inexpensive data with economically sound e-business. Objectively maximize high-payoff human capital rather than turnkey "outside the box" thinking. Proactively foster world-class products and interoperable convergence. Assertively underwhelm 2.0 metrics rather than leveraged e-tailers. Authoritatively reintermediate.',
            likesCounts: '11 '
        },
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
export const updateNewPostTextActionCreator = (newTextFromTextareaNewPost) => ({ type: 'UPDATE_NEW_POST_TEXT', newText: newTextFromTextareaNewPost });
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});

// Thunks

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(userId).then(response => {
            console.log(response.data);
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(response.data));
        });
    }
};

export default profileReducer;