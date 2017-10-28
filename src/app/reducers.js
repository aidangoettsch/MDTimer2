import { LOGIN, LOGOUT, SET_DRAWER, READY } from './consts.js'

const ui = (state = {
  drawer: false
}, action) => {
  switch (action.type) {
    case SET_DRAWER:
      return Object.assign({}, state, {
        drawer: Object.assign({}, state, {
          open: action.open
        })
      })
    default:
      return state
  }
}

const token = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.token
    case LOGOUT:
      return null
    default:
      return state
  }
}

const activeSession = (state = 0, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const sessions = (state = [
  {
    name: 'Session 1',
    scramble: '333'
  }
], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const timerState = (state = READY, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const time = (state = {
  currentTime: 0,
  startTime: null
}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export { ui, token, activeSession, sessions, timerState, time }