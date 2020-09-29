import {followAPI, usersAPI} from "../api/api";
import { setTotalCount } from "./paginationReducer";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }

        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
};

export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unFollow = (userId) => ({ type: 'UN_FOLLOW', userId });
export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId });

// Thunk Creator
export const getUsers = (activePage, count) => {
    // Thunk
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(activePage, count).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
        });
    }
};

// Thunk Creator
export const getFollow = (userId) => {
    // Thunk
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export const getUnFollow = (userId) => {
    // Thunk
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};


export default usersReducer;