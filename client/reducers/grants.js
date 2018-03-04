import {RECEIVE_GRANTS} from '../actions/grants'

const initialState = {result: []}

const grants = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GRANTS:
      return action.grants
    default:
      return state
  }
}

export default grants
