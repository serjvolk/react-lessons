import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

import App from './App';

import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

// У меня почему-то работает так как в строчке ниже
// store.subscribe(rerenderEntireTree);

// А у Димыча верхний вариант не работает, поэтому пишем так:
store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
