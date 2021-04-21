import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Clock from './components/Clock'
import Form from './components/Form'
import { Component } from 'react';

class App extends Component {

  users = [
    { id: 1, name: "User 01", age: 30},
    { id: 2, name: "User 02", age: 20},
    { id: 3, name: "User 03", age: 10},
  ];

  render() {
    return <div className="App">
      <header className="App-header">
        Hello React Ningchan
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <h1><Clock ></Clock></h1>
          <User users={this.users} />
          <Form/>
        </div>
      </header>
    </div>
  }

}

export default App;
