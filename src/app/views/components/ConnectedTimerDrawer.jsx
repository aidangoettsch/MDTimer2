import TimerDrawer from './TimerDrawer.jsx'

import { connect } from 'react-redux'

import { SET_DRAWER } from '../../consts.js'

const mapStateToProps = state => {
  return {
    open: state.ui.drawer.open,
    activeSession: state.activeSession,
    activePage: state.router.location.pathname
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeDrawer: () => {
      dispatch({
        type: SET_DRAWER,
        open: false
      })
    },
    openDrawer: () => {
      dispatch({
        type: SET_DRAWER,
        open: true
      })
    }
  }
}

const ConnectedTimerDrawer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerDrawer)

export default ConnectedTimerDrawer
