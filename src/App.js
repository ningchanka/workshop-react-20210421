import logo from './logo.svg';
import './App.css';
import User from './components/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello React Ningchan
        <img src={logo} className="App-logo" alt="logo" />

        <div>
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
