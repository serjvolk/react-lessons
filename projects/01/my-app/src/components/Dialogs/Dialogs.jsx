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
    let classTypeMessage = (props.type === true) ? s.message__left : s.message__right;
    return(
        <div className={classTypeMessage}>
            <p>{props.message}</p>
        </div>
    );
}

function Dialogs () {
    return (
        <div className={s.message}>
            <div className="container">
                <div className={s.message__row}>
                    <div className={s.message__peopleList}>
                        <p className={s.title}>Диалоги</p>
                        <ul className={s.list}>
                            <DialogItem name="Михаил" id="1"/>
                            <DialogItem name="Олег" id="2"/>
                            <DialogItem name="Коля" id="3"/>
                            <DialogItem name="Жорик" id="4"/>
                        </ul>
                    </div>
                    <div className={s.message__messageList}>
                        <Messages message={"Привет я Михаил, как у тебя дела???"} type={true}/>
                        <Messages message={"Все хорошо я учу ReactJS"} type={false}/>
                        <Messages message={"И много уже выучил???"} type={true}/>
                        <Messages message={"23 урока"} type={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;