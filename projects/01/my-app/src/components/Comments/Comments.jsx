import s from "./Comments.module.css";
import Comment from "./Comment/Comment";

function Comments () {
    return (
        <div className={s.comments}>
            <div className="container">
                <div className={s.body}>
                    <h1>Коментарии челиков</h1>
                    <div className={s.list}>
                        <Comment name="Скарлетт Йоханссон" message="Как так получилось что я тут..." src="https://fs.kinomania.ru/file/person/1/95/195688ae35f80d6aca00e2fb5cd80b90.jpeg"/>
                        <Comment name="Энн Хэтэуэй" message="Не знаю что и сказать, это здорово" src="https://kino-teatr.ua/public/main/persons/2020-10/x4_photo_5f928aeee68a9.jpg"/>
                        <Comment name="Марго Робби" message="Очень крутой курс" src="https://www.film.ru/sites/default/files/styles/epsa_260x320/public/people/0_996.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Comments;