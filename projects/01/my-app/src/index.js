import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 0, msg: "Утром побегала с орехом..." },
    {id: 1, msg: "Вечером побегала с орехом..."},
    {id: 2, msg: "Ночью сплю с орехом..."},
    {id: 3, msg: "Сниться мне орех"}
];

let dialogsData = [
    {id: 1, name: "Михаил" },
    {id: 2, name: "Олег"},
    {id: 3, name: "Коля"},
    {id: 4, name: "Оля"},
    {id: 5, name: "Наташа"},
    {id: 6, name: "Жорик"}
];

let messagesData = [
    {id: 1, msg: "Привет я Михаилко, как у тебя дела???", typeMessage: true},
    {id: 2, msg: "Все хорошо я учу ReactJS", typeMessage: false},
    {id: 3, msg: "И много уже выучил???", typeMessage: true},
    {id: 4, msg: "23 урока", typeMessage: false}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
