import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Technologies from './components/Technologies/Technologies';
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {addPost, newPost} from "./redux/state";

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
                          <Route path='/profile' render={ () => <Profile profilePage={props.appState.profilePage} addPost={addPost} newPost={newPost} /> }/>
                          <Route path='/technologies' render={ () => <Technologies /> }/>
                          <Route path='/comments' render={ () => <Comments /> }/>
                          <Route path='/dialogs' render={ () => <Dialogs dialogs={props.appState.dialogsPage}/> }/>
                      </div>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;