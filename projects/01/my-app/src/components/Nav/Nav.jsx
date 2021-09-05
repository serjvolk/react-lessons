import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav () {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Диалоги</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/comments" activeClassName={s.activeLink}>Комментарии</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/technologies" activeClassName={s.activeLink}>Мои знания</NavLink>
                </li>
                <li className={s.item}>
                    <a href="">Друзья</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;