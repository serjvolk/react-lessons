import React from "react";
import {addPost, getStatus, getUserProfile, updateNewPost, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; // Получаем id от withRouter
        if(!userId){userId = 19673;} // Если нет userId то показываем пользователя с id = 2
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

// Формируем данные для Profile
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostTextVal
});

export default compose(
    connect(mapStateToProps, {addPost, getUserProfile, updateNewPost, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);