import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch'
import StartButton from "./components/StartButton"
import StopButton from "./components/StopButton"
import CountDown from "./components/CountDown"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      start: 0,
      countdown: 0
    }
  }

increment = () => {
  if (this.state.start === 1){
    this.setState({
      seconds: this.state.seconds + 1
    })
  }
}

addMinute = () => {
  if (this.state.seconds === 60) {
    this.setState({
      minutes: this.state.minutes + 1,
      seconds: this.state.seconds = 0
    })
  }
}

addHour = () => {
  if (this.state.minutes === 60) {
    this.setState({
      minutes: this.state.minutes = 0,
      hours: this.state.hours + 1
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
    this.addMinute()
    this.addHour()
  }, 1000);
}
  
render() {
  return (
    <div className="App">
      <Stopwatch seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours}/>
      <StartButton startTimer={this.startTimer}/>
      <StopButton stopTimer={this.stopTimer} />
      <CountDown countdown={this.countdown} />
    </div>
  );
}
}

export default App;
