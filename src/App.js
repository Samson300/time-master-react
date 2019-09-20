import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch'
import StartButton from "./components/StartButton"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  
  render() {
    return (
      <div className="App">
        <Stopwatch counter={this.state.counter} />
        <StartButton />
      </div>
    );
  }
}

export default App;
