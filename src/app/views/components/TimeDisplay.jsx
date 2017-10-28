import React from 'react'

import { READY, INSPECTION_ARMED, INSPECTION, STARTING, ARMED, TIMING } from './../../consts.js'

class TimeDisplay extends React.Component {
  constructor () {
    super()
    this.stateMap = {}
    this.stateMap[READY] = 'timer-black'
    this.stateMap[INSPECTION_ARMED] = 'timer-armed'
    this.stateMap[INSPECTION] = 'timer-black'
    this.stateMap[STARTING] = 'timer-starting'
    this.stateMap[ARMED] = 'timer-armed'
    this.stateMap[TIMING] = 'timer-black'
  }

  static formatActiveTime (time) {
    let minutes = Math.floor(time/60000)
    let hours = Math.floor(minutes/60)
    let seconds = ((time) - (minutes * 60000))/1000
    minutes -= hours*60
    seconds = seconds.toFixed(3)
    if (minutes < 10 && hours > 0) minutes = "0" + minutes
    if (seconds < 10 && minutes > 0) seconds = "0" + seconds
    if (hours > 0) return hours + ":" + minutes + ":" + seconds
    else if (minutes > 0) return minutes + ":" + seconds
    else return seconds
  }

  render () {
    return (
      <div className='time-display-container'>
        <div className={'time' + this.stateMap[this.props.timerState]}>
          {this.props.timerState === INSPECTION
            || this.props.timerState === STARTING
            || this.props.timerState === ARMED
            ? this.props.currentTime.toFixed() : TimeDisplay.formatActiveTime(this.props.currentTime)}
        </div>
      </div>
    )
  }
}

export default TimeDisplay
