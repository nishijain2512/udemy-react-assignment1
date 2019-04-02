import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>This is my 1st React assignment!!!!</h1>
       <UserOutput content='Paragraph 1'/>
       <UserOutput content='Paragraph 2'/>
      </div>
    );
  }
}

export default App;
