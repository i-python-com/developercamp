import uuid from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

// setAlert function return dispatch function
// can execute multiple dispatch action in setAlert()
export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4()
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  })
}
