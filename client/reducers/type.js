import {RECEIVE_TYPE} from '../actions/type'

const initialState = []

const type = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TYPE:
      return action.interestType.type
    default:
      return state
  }
}

export default type
