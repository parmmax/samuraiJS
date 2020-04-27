import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';

let rerenderEntireTree = (state) => {

    // debugger;

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 // state={state}
                 // dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

//==================================================================================
// импорт наш стор и сделай все по аналогии из 43 урока!
// в итоге все заработало!
// теперь пробую включить redux-store и import сделать от туда
// тоже работает! Супер!
// ошибка была в не верном адресе пропс: props.getState(),
// а должно было быть: props.store.getState
//==================================================================================
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
