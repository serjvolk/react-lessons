import './App.css';
import Technologies from './technologies/technologies';
import Header from "./header/header";

const App = () => {
  return (
      <div id="main">
          <Header/>
          <Technologies />
      </div>
  );
}

export default App;