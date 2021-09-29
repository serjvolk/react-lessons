import css from "./../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo (props) {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div className={css.body}>
            <div className={css.row}>
                <div className={css.col}>
                    <div className={css.image}>
                        <img src={props.profile.photos.large} alt=""/>
                    </div>
                </div>
                <div className={css.col}>
                    <div className={css.text}>
                        <p className={css.name}>{props.profile.fullName}</p>
                        <p className={css.age}>2.7 лет</p>
                        <p className={css.sity}>Антарктида</p>
                        <p className={css.description}>{props.profile.aboutMe}</p>
                    </div>
                </div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}
export default ProfileInfo;