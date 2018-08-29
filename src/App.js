import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
const message = "😷😷🚫Welcome🚫😷😷";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {message}
          <Person name="David" age="35"/>
          <Person name="Sheela" age="13"/>
          <Person name="Daniela" age="43"> My hobby is Cycling</Person>
        </p>
      </div>
    );
    return React.createElement('div', null, React.createElement('h1', null, 'Hi I am a React App'));
  }
}

class Welcome extends App{
  render(){
    return(
      <p>Learning ReactJS</p>
    )
  }
}

export default App;
