import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";
import React from "react";
import {Field, reduxForm} from "redux-form";

function Profile (props) {
    let postsElements = props.posts.map((post) =>  <Posts postMessage={post.msg} id={post.id} key={post.id}/>);

    let addNewPostMessage = (values) => {
        props.addPostMessage(values.newPostText);
    }

    return (
        <div className={css.profile}>
            <div className="container">
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <ul className={css.posts}>
                    {postsElements}
                </ul>
                <AddPostFormRedux onSubmit={addNewPostMessage} />
            </div>
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form className={css.addPost} onSubmit={props.handleSubmit}>
            <Field component={"input"} name={"newPostText"} placeholder={"Enter your post message"}/>
            <button>Сохранить</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "addPostMessageForm"})(AddPostForm);



export default Profile;