import TimeDisplay from './TimeDisplay.jsx'

import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    timerState: state.timerState,
    currentTime: state.time.currentTime
  }
}

const ConnectedTimeDisplay = connect(
  mapStateToProps
)(TimeDisplay)

export default ConnectedTimeDisplay
