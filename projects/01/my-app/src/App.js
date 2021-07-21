import './App.css';
import Technologies from './components/Technologies/Technologies';
import Header from "./components/Header/Header";
import Knowledge from "./components/Knowledge/Knowledge";
import Comments from "./components/Comments/Comments";

const App = () => {
  return (
      <div id="main">
          <Header/>
          <Technologies />
          <Knowledge />
          <Comments />
      </div>
  );
}

export default App;