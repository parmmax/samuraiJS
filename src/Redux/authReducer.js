import {authAPI} from "../api/api";
import {toggleIsFetching} from "./usersReducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }
};
export const setAuthUserData = (id, email, login) => ({ type: 'SET_USER_DATA', data: {id, email, login} });

// Thunk
export const getAuth = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.getAuthMe().then(response => {
            dispatch(toggleIsFetching(false));
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    setAuthUserData(id, email, login);
                }
            });
    }
};

export default authReducer;