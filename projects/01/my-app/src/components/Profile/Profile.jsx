import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";
import React from "react";

function Profile (props) {
    let postsElements = props.posts.map((post) =>  <Posts postMessage={post.msg} id={post.id} key={post.id}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={css.profile}>
            <div className="container">
                <ProfileInfo profile={props.profile}/>
                <ul className={css.posts}>
                    {postsElements}
                </ul>
                <div className={css.addPost}>
                    <input onChange={onPostChange} type="text" ref={newPostElement} value={props.newPostText}/>
                    <button onClick={onAddPost}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}
export default Profile;