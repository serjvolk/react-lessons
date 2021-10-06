import React from "react";
import {addPostMessage, getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; // Получаем id от withRouter
        if(!userId){
            userId = this.props.authorizedUserId;
        }
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
    newPostText: state.profilePage.newPostTextVal,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {addPostMessage, getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);