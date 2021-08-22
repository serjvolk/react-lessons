import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";


// Формируем данные для Profile
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostTextVal
    }
}

// Формируем колбэки для Profile
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

/*Тут мы как бы конектим Profile к store. Где функция mapStateToProps передает в Profile пропсы которые являются данными,
* а mapDispatchToProps передает колбэки.  */
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;