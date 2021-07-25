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

    return (
        <div className={s.message}>
            <div className="container">
                <div className={s.message__row}>
                    <div className={s.message__peopleList}>
                        <p className={s.title}>Диалоги</p>
                        <ul className={s.list}>
                            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                            <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                        </ul>
                    </div>
                    <div className={s.message__messageList}>
                        <Messages message={messagesData[0].msg} typeMessage={messagesData[0].typeMessage}/>
                        <Messages message={messagesData[1].msg} typeMessage={messagesData[1].typeMessage}/>
                        <Messages message={messagesData[2].msg} typeMessage={messagesData[2].typeMessage}/>
                        <Messages message={messagesData[3].msg} typeMessage={messagesData[3].typeMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;