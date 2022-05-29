import './App.css';
import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "Testing"
    };
  }
buttonClickHandler = () =>{
  console.log(this.state)
}
render() {
  return (
    <div className="App">
      <Person name="wsCube Tech" age="19" />
      <button type="button" onClick={()=> this.buttonClickHandler()}> click me </button>
    </div>
  )
  }
}
export default App;
