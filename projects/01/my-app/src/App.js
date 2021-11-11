import React from "react";
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Technologies from './components/Technologies/Technologies';
import Comments from "./components/Comments/Comments";
import Nav from "./components/Nav/Nav";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import Login from "./components/Login/Login";
import {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux-store';
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
                            { // Так было до того как мы обернули в хок withSuspense
                                                            /*<Route path='/profile/:userId?' render={() => {
                                                                return <React.Suspense fallback={<div>Loading...</div>}>
                                                                    <ProfileContainer/>
                                                                </React.Suspense>
                                                            }}/>
                                                            <Route path='/dialogs' render={() => {
                                                                return <React.Suspense fallback={<div>Loading...</div>}>
                                                                    <DialogsContainer/>
                                                                </React.Suspense>
                                                            }}/>*/
                            }
                            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>

                            <Route path='/technologies' render={() => <Technologies/>}/>
                            <Route path='/comments' render={() => <Comments/>}/>
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

//export default connect(mapStateToProps, {initializeApp}) (App);

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;