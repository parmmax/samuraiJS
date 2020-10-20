import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from './appReducer'
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import paginationReducer from './paginationReducer';
import linksReducer from './linksReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    pagination: paginationReducer,
    links: linksReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;