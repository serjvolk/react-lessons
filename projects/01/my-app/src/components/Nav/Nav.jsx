import s from './Nav.module.css';

function Nav () {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}><a href="">Профиль</a></li>
                <li className={s.item}><a href="">Сообщения</a></li>
                <li className={s.item}><a href="">Друзья</a></li>
                <li className={s.item}><a href="/comments">Комментарии</a></li>
                <li className={s.item}><a href="/technologies">Мои знания</a></li>
            </ul>
        </nav>
    );
}

export default Nav;