import {authAPI} from "../api/api";
import {toggleIsFetching} from "./usersReducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_BG_TRAMSPORENT = 'SET_BG_TRAMSPORENT';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    bgTransporent: true
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

        case SET_BG_TRAMSPORENT: {
            return { ...state, bgTransporent: action.bgTransporent }
        }

        default:
            return state;
    }
};

// export const setBgTransporent = (bgTransporent) => ({type: 'SET_BG_TRAMSPORENT', bgTransporent});
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