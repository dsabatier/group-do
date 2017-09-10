import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authRequest: ['username', 'password'],
  authSuccess: ['payload'],
  authFailure: null
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { username, password }) => {
  console.log(`Attempting sign in with ${username}/${password}`)
  return state.merge({ fetching: true, payload: null })
}


// successful api lookup
export const success = (state, {username}) => {
  console.log(`Signed in as ${username}`)
  return state.merge({ fetching: false, error: null })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_FAILURE]: failure
})
