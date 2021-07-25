import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem (props) {
    let path = "/dialogs/" + props.id;
    return (
        <li>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </li>
    );
}

function Messages(props) {
    let classTypeMessage = (props.typeMessage === true) ? s.message__left : s.message__right;
    return(
        <div className={classTypeMessage}>
            <p>{props.message}</p>
        </div>
    );
}

function Dialogs () {
    let dialogsData = [
        {id: 1, name: "Михаил" },
        {id: 2, name: "Олег"},
        {id: 3, name: "Коля"},
        {id: 4, name: "Оля"},
        {id: 5, name: "Наташа"},
        {id: 6, name: "Жорик"}
    ];

    let messagesData = [
        {id: 1, msg: "Привет я Михаил, как у тебя дела???", typeMessage: true},
        {id: 2, msg: "Все хорошо я учу ReactJS", typeMessage: false},
        {id: 3, msg: "И много уже выучил???", typeMessage: true},
        {id: 4, msg: "23 урока", typeMessage: false}
    ];

    let dialogsElements = dialogsData.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElements = messagesData.map((msg) => <Messages message={msg.msg} typeMessage={msg.typeMessage}/>);

    return (
        <div className={s.message}>
            <div className="container">
                <div className={s.message__row}>
                    <div className={s.message__peopleList}>
                        <p className={s.title}>Диалоги</p>
                        <ul className={s.list}>
                            {dialogsElements}
                        </ul>
                    </div>
                    <div className={s.message__messageList}>
                        {messagesElements}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;