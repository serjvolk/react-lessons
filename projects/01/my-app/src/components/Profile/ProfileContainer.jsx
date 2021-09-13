import React from "react";
import {addPost, setUserProfile, updateNewPost} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

// Формируем данные для Profile
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostTextVal
});

/*Тут мы как бы конектим Profile к store. Где функция mapStateToProps передает в Profile пропсы которые являются данными,
* а mapDispatchToProps передает колбэки.  */
export default connect(mapStateToProps, {addPost, setUserProfile, updateNewPost})(ProfileContainer);