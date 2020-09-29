import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
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
export const setAuthUserData = (id, email, login) => ({ type: 'SET_USER_DATA', data: {id, login, email } });

// Thunk
export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export default authReducer;