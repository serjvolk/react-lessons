import s from './../Dialogs.module.css';

function Message(props) {
    let classTypeMessage = (props.typeMessage === true) ? s.message__left : s.message__right;
    return(
        <div className={classTypeMessage}>
            <p>{props.message}</p>
        </div>
    );
}

export default Message;