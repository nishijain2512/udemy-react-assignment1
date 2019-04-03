import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import userInput from './UserInput/UserInput';

class App extends Component {

  state = {
    userName:'nishijain2512'
  };

  usernameChangedHandler = (event) => {
    this.setState ({userName : event.target.value})
    
  }

  render() {
    return (
      <div className="App">
      <h1>This is my first react assignment.</h1>
       <UserInput changed={this.usernameChangedHandler} currentName={this.state.userName}/>
       <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
