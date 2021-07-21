import s from "./Comments.module.css";
import Comment from "./Comment/Comment";

function Comments () {
    return (
        <div className={s.comments}>
            <div className="container">
                <div className={s.body}>
                    <h1>Коментарии челиков</h1>
                    <div className={s.list}>
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Comments;