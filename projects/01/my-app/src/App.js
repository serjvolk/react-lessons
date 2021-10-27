import './App.css';
import {Route} from "react-router-dom";
import Technologies from './components/Technologies/Technologies';
import Comments from "./components/Comments/Comments";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <div id="main">
                <HeaderContainer/>
                <div className="container">
                    <div className="main__page">
                        <div className="main__aside">
                            <Nav/>
                        </div>
                        <div className="main__content">
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/technologies' render={() => <Technologies/>}/>
                            <Route path='/comments' render={() => <Comments/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp}) (App);