import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";

function Profile (props) {
    console.log(props);


    return (
        <div className={css.profile}>
            <div className="container">
                <ProfileInfo />
                <ul className={css.posts}>
                    {props.postsElements}
                </ul>
            </div>
        </div>
    );
}
export default Profile;