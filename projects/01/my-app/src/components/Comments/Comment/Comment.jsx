import s from "./Comment.module.css";

function Comment (props) {
    return (
        <div className={s.comment}>
            <div className={s.person}>
                <img src={props.src} alt=""/>
                <p>{props.name}</p>
            </div>
            <p className={s.message}>{props.message}</p>
        </div>
    );
}
export default Comment;