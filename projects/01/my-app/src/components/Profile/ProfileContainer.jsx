import React from "react";
import {addPost, getUserProfile, updateNewPost} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; // Получаем id от withRouter
        if(!userId){userId =2;} // Если нет userId то показываем пользователя с id = 2
        this.props.getUserProfile(userId);
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

export default compose(
    connect(mapStateToProps, {addPost, getUserProfile, updateNewPost}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);