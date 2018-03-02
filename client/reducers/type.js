// kimmi and tian
import {SEND_TYPE} from '../actions/type'

const initialState = [1, 2, 3, 4]

const type = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TYPE:
      return action.interestType
    default:
      return state
  }
}

export default type
