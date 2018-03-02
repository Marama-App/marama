import {REQUEST_GRANTS} from '../actions/grants'

const grants = (state = [], action) => {
  switch (action.type) {
    case REQUEST_GRANTS:
      return action.grants
    default:
      return state
  }
}

export default grants
