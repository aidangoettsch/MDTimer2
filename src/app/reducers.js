import { LOGIN, LOGOUT } from "./actionTypes"

export default (state = {
  token: null,
  times: []
}, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        token: action.token
      })
    case LOGOUT:
      return Object.assign({}, state, {
        token: null
      })
    default:
      return state
  }
}