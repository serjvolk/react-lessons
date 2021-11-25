import css from "./../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/no-user.png';
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo ({profile,status,updateStatus, isOwner, savePhoto, saveProfile}) {

    let [editMode, setEditMode] = useState(false);

    if(!profile){
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
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
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner}/>}
                </div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={css.col}>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div className={css.text}>
            <p className={css.name}>Full name: {profile.fullName}</p>
            <p className={css.age}>27 лет</p>
            <p className={css.sity}>Антарктида</p>
            <p className={css.description}>{profile.aboutMe}</p>
            <p>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJob &&
                <p>My professional skills: {profile.lookingForAJobDescription}</p>
            }
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;