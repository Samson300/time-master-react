import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch'
import StartButton from "./components/StartButton"
import StopButton from "./components/StopButton"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0
    }
  }

increment = () => {
  if (this.state.start === 1){
    this.setState({
      time: this.state.time + 1
    })
  }
}

startTimer = () => {
  this.setState({
    start: 1
  })
}

stopTimer = () => {
  this.setState({
    start:0
  })
}

componentDidMount() {
  setInterval(() => {
    this.increment()
  }, 100);
}
  
render() {
  return (
    <div className="App">
      <Stopwatch time={this.state.time} />
      <StartButton startTimer={this.startTimer}/>
      <StopButton stopTimer={this.stopTimer} />
    </div>
  );
}
}

export default App;
