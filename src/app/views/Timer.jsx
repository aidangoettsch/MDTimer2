import React from 'react'

import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import ConnectedTimerDrawer from './components/ConnectedTimerDrawer.jsx'
import ConnectedTimeDisplay from './components/ConnectedTimeDisplay.jsx'

class Timer extends React.Component {
  render () {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <ConnectedTimerDrawer />
            <Typography type='title' color='inherit' className='flex'>
              SCRAMBLE
            </Typography>
            <Link to="/login">
              <Button color='contrast'>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <ConnectedTimeDisplay/>
      </div>
    )
  }
}

export default Timer
