import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs (props) {
    let dialogsElements = props.dialogsPage.dialogs.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id} key={dialogs.id}/>);
    let messagesElements = props.dialogsPage.messages.map((msg) => <Message message={msg.msg} typeMessage={msg.typeMessage} key={msg.id}/>);

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

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
                    <div className={s.message__content}>
                        <div className={s.message__messageList}>
                            {messagesElements}
                        </div>
                        <div className={s.message__input}>
                            <input onChange={onMessageChange} type="text" placeholder={"Введите сообщение"} ref={newMessageElement} value={props.dialogsPage.newMessageTextVal}/>
                            <button onClick={onAddMessage}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;