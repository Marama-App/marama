import { RECEIVE_INTERESTS } from '../actions/interests'

const interests = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_INTERESTS:
      return action.interests
    default:
      return state
  }
}

export default interests
