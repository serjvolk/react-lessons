import css from "./Profile.module.css";
import ProfileInfo from "./PrifileInfo/ProfileInfo";
import Posts from "./PrifileInfo/Posts";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const Profile = React.memo(props => {
    console.log('RENDER');
    console.log(props);
    let postsElements = props.posts.map((post) => <Posts postMessage={post.msg} id={post.id} key={post.id}/>);

    let addNewPostMessage = (values) => {
        props.addPostMessage(values.newPostText);
    }

    return (
        <div className={css.profile}>
            <div className="container">
                <ProfileInfo profile={props.profile} status={props.status}
                             updateStatus={props.updateStatus}/>
                <ul className={css.posts}>
                    {postsElements}
                </ul>
                <AddPostFormRedux onSubmit={addNewPostMessage}/>
            </div>
        </div>
    );
});

const AddPostForm = (props) => {
    return (
        <form className={css.addPost} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} placeholder={"Enter your post message"} validate={[required, maxLength10]}/>
            <button>Сохранить</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "addPostMessageForm"})(AddPostForm);



export default Profile;