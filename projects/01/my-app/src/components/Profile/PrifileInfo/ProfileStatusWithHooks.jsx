import React, {useState} from "react";
import css from "./../Profile.module.css";

const ProfileStatusWithHooks = (props) => {
    // Задаем локальный state и говорим что он равен false
    // useState это массив в нем первый элемент это  editMode, второй - функция которая может менять это значение
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={css.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    );
}
export default ProfileStatusWithHooks;