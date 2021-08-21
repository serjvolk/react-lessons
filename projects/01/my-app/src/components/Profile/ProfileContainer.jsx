import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import Profile from "./Profile";
import StoreContext from "../../StoreContext";

function ProfileContainer (props) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text));
                }

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                return <Profile updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostTextVal}/>
            }
        }
        </StoreContext.Consumer>
    );
}
export default ProfileContainer;