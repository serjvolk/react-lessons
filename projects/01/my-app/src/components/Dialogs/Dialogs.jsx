import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";

function Dialogs (props) {
    let dialogsElements = props.dialogsPage.dialogs.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}
                                                                                 key={dialogs.id}/>);
    let messagesElements = props.dialogsPage.messages.map((msg) => <Message message={msg.msg}
                                                                            typeMessage={msg.typeMessage}
                                                                            key={msg.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form className={s.message__input} onSubmit={props.handleSubmit}>
            <Field component={"input"} name={"newMessageBody"} placeholder={"Enter your message"} />
            <button>Отправить</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;