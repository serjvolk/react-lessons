import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";

function Profile (props) {
    let postsElements = props.posts.posts.map((post) =>  <Posts postMessage={post.msg} id={post.id}/>);

    return (
        <div className={css.profile}>
            <div className="container">
                <ProfileInfo />
                <ul className={css.posts}>
                    {postsElements}
                </ul>
            </div>
        </div>
    );
}
export default Profile;