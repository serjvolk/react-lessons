//import logo from './logo.svg';
import './App.css';

// Можно создать компонетну как в виде стрелочной функции ...
const App = () => {
  return (
      <div>
          <Header />
          <Technologies />
      </div>
  );
}

// ... так и в виде обычной функции

function Header () {
    return (
        <h1>
            Привет <span>Сережка</span>
        </h1>
    );
}

function Technologies () {
    return (
        <div className="App">
            <ul className="svone">
                <li>Hellosiodss</li>
                <li>my</li>
                <li>friend</li>
            </ul>
        </div>
    );
}

export default App;