import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";
import React from "react";

function Profile (props) {
    let postsElements = props.profilePage.posts.map((post) =>  <Posts postMessage={post.msg} id={post.id}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.newPostText(text);
    }

    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={css.profile}>
            <div className="container">
                <ProfileInfo />
                <ul className={css.posts}>
                    {postsElements}
                </ul>
                <div className={css.addPost}>
                    <input onChange={onPostChange} type="text" ref={newPostElement} value={props.profilePage.newPostTextVal}/>
                    <button onClick={addPost}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}
export default Profile;