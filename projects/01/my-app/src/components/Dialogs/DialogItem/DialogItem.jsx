import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem (props) {
    let path = "/dialogs/" + props.id;
    return (
        <li>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;