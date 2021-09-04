import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Technologies from './components/Technologies/Technologies';
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
      <BrowserRouter>
          <div id="main">
              <Header/>
              <div className="container">
                  <div className="main__page">
                      <div className="main__aside">
                          <Nav />
                      </div>
                      <div className="main__content">
                          <Route path='/profile' render={ () => <ProfileContainer/> }/>
                          <Route path='/technologies' render={ () => <Technologies /> }/>
                          <Route path='/comments' render={ () => <Comments /> }/>
                          <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
                          <Route path='/users' render={ () => <UsersContainer/> }/>
                      </div>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;