import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";
import React from "react";

function Profile (props) {
    let postsElements = props.profilePage.posts.map((post) =>  <Posts postMessage={post.msg} id={post.id}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', postMessage: text});
    }

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
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