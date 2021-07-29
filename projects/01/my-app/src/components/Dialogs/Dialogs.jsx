import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
    let messagesElements = messagesData.map((msg) => <Message message={msg.msg} typeMessage={msg.typeMessage}/>);

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