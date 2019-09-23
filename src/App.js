import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch'
import StartButton from "./components/StartButton"
import StopButton from "./components/StopButton"
import CountDown from "./components/CountDown"
import StartCountDownButton from "./components/StartCountDownButton"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      start: 0,
      countdown: 30,
      startCountDown: 0
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

setCountDownTimer = (time) => {
  this.setState({
    countdown: time
  })
}

startCountDownTimer = () => {
  this.setState({
    startCountDown: 1
  })
}

decrement = () => {
  if (this.state.startCountDown === 1) {
    console.log("this is running")
    this.setState({
      countdown: this.state.countdown - 1
    })
  }
}

componentDidMount() {
  setInterval(() => {
    this.increment()
    this.addMinute()
    this.addHour()
    this.decrement()
  }, 1000);
}
  
render() {
  return (
    <div className="App">
      <Stopwatch seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours}/>
      <StartButton startTimer={this.startTimer}/>
      <StopButton stopTimer={this.stopTimer} />
      <CountDown countdown={this.state.countdown} setCountDownTimer={this.setCountDownTimer} />
      <StartCountDownButton startCountDownTimer={this.startCountDownTimer} />
    </div>
  );
}
}

export default App;
