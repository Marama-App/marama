import {RECEIVE_ALL} from '../actions/update'

const initialState = []

const update = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL:
      return action.all
    default:
      return state
  }
}

export default update
