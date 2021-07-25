import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function Dialogs () {
    return (
        <div className={s.message}>
            <div className="container">
                <div className={s.message__row}>
                    <div className={s.message__peopleList}>
                        <p className={s.title}>Диалоги</p>
                        <ul className={s.list}>
                            <li>
                                <NavLink to="/dialogs/1" activeClassName={s.activeLink}>Михаил</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialogs/2" activeClassName={s.activeLink}>Олег</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialogs/3" activeClassName={s.activeLink}>Коля</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialogs/4" activeClassName={s.activeLink}>Жорий</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={s.message__messageList}>
                        <div className={s.message__left}>
                            <p>Привет я Михаил, как у тебя дела???</p>
                        </div>
                        <div className={s.message__right}>
                            <p>Все хорошо я учу ReactJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;