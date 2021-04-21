import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello React Ningchan
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <h1><Clock ></Clock></h1>
          <ul>
            <User info="User 01"></User>
            <User info="User 02"></User>
            <User info="User 03"></User>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
