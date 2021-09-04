import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => { // Принимает весь state и отдает только то что нужно
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => { // Отдаем колбеки которые презентационная компонента может вызывать
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);