import css from "./../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo ({profile,status,updateStatus}) {
    if(!profile){
        return <Preloader />
    }
    return (
        <div className={css.body}>
            <div className={css.row}>
                <div className={css.col}>
                    <div className={css.image}>
                        <img src={profile.photos.large} alt=""/>
                    </div>
                </div>
                <div className={css.col}>
                    <div className={css.text}>
                        <p className={css.name}>{profile.fullName}</p>
                        <p className={css.age}>2.7 лет</p>
                        <p className={css.sity}>Антарктида</p>
                        <p className={css.description}>{profile.aboutMe}</p>
                    </div>
                </div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
}
export default ProfileInfo;