import s from "./Comment.module.css";

function Comment () {
    return (
        <div className={s.comment}>
            <div className={s.person}>
                <img src="https://fs.kinomania.ru/file/person/1/95/195688ae35f80d6aca00e2fb5cd80b90.jpeg" alt=""/>
                <p>Скарлетт Йоханссон</p>
            </div>
            <p className={s.message}>Очень хороший мальчик Сережа</p>
        </div>
    );
}
export default Comment;