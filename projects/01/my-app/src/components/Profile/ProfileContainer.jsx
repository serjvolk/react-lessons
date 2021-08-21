import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import Profile from "./Profile";

function ProfileContainer (props) {
    let state = props.store.getState();

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (<Profile updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostTextVal}/>);
}
export default ProfileContainer;