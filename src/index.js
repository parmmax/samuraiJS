import * as serviceWorker from './serviceWorker';
import store from "./Redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


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
