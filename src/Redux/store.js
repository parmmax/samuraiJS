import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import paginationReducer from './paginationReducer';
import authReducer from './authReducer';
import weatherReducer from './weatherReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    pagination: paginationReducer,
    auth: authReducer,
    weather: weatherReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;