import './App.css';
import Technologies from './technologies/Technologies';
import Header from "./header/Header";
import Knowledge from "./components/Knowledge";

const App = () => {
  return (
      <div id="main">
          <Header/>
          <Technologies />
          <Knowledge />
      </div>
  );
}

export default App;