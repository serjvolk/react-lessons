import css from "./../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/no-user.png';

function ProfileInfo ({profile,status,updateStatus, isOwner, savePhoto}) {
    if(!profile){
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={css.body}>
            <div className={css.row}>
                <div className={css.col}>
                    <div className={css.image}>
                        <img src={profile.photos.large || userPhoto} className={css.mainPhoto} alt=""/>
                    </div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
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