import { FETCH_INTERESTS } from '../actions/interests'

const interests = (state = [], action) => {
  switch (action.type) {
    case FETCH_INTERESTS:
      return action.interests
    default:
      return state
  }
}

export default interests
