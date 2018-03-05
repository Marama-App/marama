import { RECEIVE_INTERESTS } from '../actions/interests'

const initialState = []

const interestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INTERESTS:
      return action.interests
    default:
      return state
  }
}

export default interestsReducer
