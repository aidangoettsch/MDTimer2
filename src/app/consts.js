// Reducer actions
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_DRAWER = 'SET_DRAWER'

// Timer states
export const READY = 'READY' // Starting state / after timing
export const INSPECTION_ARMED = 'INSPECTION_ARMED' // Ready to inspect, release key to start
export const INSPECTION = 'INSPECTION' // 15 second inspection period
export const STARTING = 'STARTING' // Key down, but needs to be held more to arm
export const ARMED = 'ARMED' // Ready to time, release key to start
export const TIMING = 'TIMING' // Timer active
