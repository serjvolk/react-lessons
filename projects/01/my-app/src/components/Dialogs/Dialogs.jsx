import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs (props) {

    let dialogsElements = props.dialogs.dialogs.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElements = props.dialogs.messages.map((msg) => <Message message={msg.msg} typeMessage={msg.typeMessage}/>);

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