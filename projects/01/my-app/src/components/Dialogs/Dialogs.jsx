import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";

function Dialogs (props) {
    let dialogsElements = props.dialogs.dialogs.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElements = props.dialogs.messages.map((msg) => <Message message={msg.msg} typeMessage={msg.typeMessage}/>);

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
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
                            <input onChange={onMessageChange} type="text" placeholder={"Введите сообщение"} ref={newMessageElement} value={props.dialogs.newMessageTextVal}/>
                            <button onClick={addMessage}>Отправить</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;