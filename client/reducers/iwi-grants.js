import {RECEIVE_IWIGRANTS} from '../actions/iwi-grants'

const initialState = []

const iwiGrant = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_IWIGRANTS:
      return action.iwiGrants

    default:
      return state
  }
}

export default iwiGrant
