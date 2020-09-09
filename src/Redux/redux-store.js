import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import paginationReducer from './paginationReducer';
import preLoaderReducer from './preLoaderReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    pagination: paginationReducer,
    preLoader: preLoaderReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;