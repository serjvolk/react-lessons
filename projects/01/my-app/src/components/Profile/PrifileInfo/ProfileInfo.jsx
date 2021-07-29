import css from "./../Profile.module.css";

function ProfileInfo () {
    return (
        <div className={css.body}>
            <div className={css.row}>
                <div className={css.col}>
                    <div className={css.image}>
                        <img src="https://slovnet.ru/wp-content/uploads/2019/03/8-18.jpg" alt=""/>
                    </div>
                </div>
                <div className={css.col}>
                    <div className={css.text}>
                        <p className={css.name}>Белочка Шмэля</p>
                        <p className={css.age}>2.7 лет</p>
                        <p className={css.sity}>Антарктида</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;