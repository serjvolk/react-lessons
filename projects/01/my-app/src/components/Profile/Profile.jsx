import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";
import React from "react";

function Profile (props) {
    let postsElements = props.posts.posts.map((post) =>  <Posts postMessage={post.msg} id={post.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={css.profile}>
            <div className="container">
                <ProfileInfo />
                <ul className={css.posts}>
                    {postsElements}
                </ul>
                <div className={css.addPost}>
                    <input type="text" autocomplete="off" ref={newPostElement}/>
                    <button onClick={addPost}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}
export default Profile;