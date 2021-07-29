import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";

function Profile () {

    let posts = [
        {id: 0, msg: "Утром побегала с орехом..." },
        {id: 1, msg: "Вечером побегала с орехом..."},
        {id: 2, msg: "Ночью сплю с орехом..."},
        {id: 3, msg: "Сниться мне орех"}
    ];

    let postsElements = posts.map((post) =>  <Posts postMessage={post.msg}/>);

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