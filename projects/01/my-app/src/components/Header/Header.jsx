import css from  "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header (props) {
    return (
        <div className={css.header}>
            <h1>Я буду знать ReactJS</h1>
            {props.isAuth
                ? <h2>{props.login} - <button onClick={props.logout}>Log out</button></h2>
                : <NavLink to={'/login'} className={css.link}>Login</NavLink>}
        </div>
    );
}
export default Header;