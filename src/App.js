import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch'
import StartButton from "./components/StartButton"
import StopButton from "./components/StopButton"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      start: 0
    }
  }

increment = () => {
  if (this.state.start === 1){
    this.setState({
      seconds: this.state.seconds + 1
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
      <Stopwatch seconds={this.state.seconds} />
      <StartButton startTimer={this.startTimer}/>
      <StopButton stopTimer={this.stopTimer} />
    </div>
  );
}
}

export default App;
