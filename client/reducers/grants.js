import {RECEIVE_GRANTS} from '../actions/grants'

const grants = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GRANTS:
      return action.grants
    default:
      return state
  }
}

export default grants
