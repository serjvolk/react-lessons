import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Technologies from './components/Technologies/Technologies';
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Profile/PrifileInfo/Posts";

const App = () => {

    let posts = [
        {id: 0, msg: "Утром побегала с орехом..." },
        {id: 1, msg: "Вечером побегала с орехом..."},
        {id: 2, msg: "Ночью сплю с орехом..."},
        {id: 3, msg: "Сниться мне орех"}
    ];

    let postsElements = posts.map((post) =>  <Posts postMessage={post.msg} id={post.id}/>);

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
                          <Route path='/profile' render={ () => <Profile postsElements={postsElements}/> }/>
                          <Route path='/technologies' render={ () => <Technologies /> }/>
                          <Route path='/comments' render={ () => <Comments /> }/>
                          <Route path='/dialogs' render={ () => <Dialogs /> }/>
                      </div>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;