import {RECEIVE_TYPES} from '../actions/update'

const initialState = [{id: 1, name: 'test', description: 'description', interest_id: 4, type_id: 1, interests: 'test'}]

const updateTypes = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TYPES:
      return action.interestTypes
    default:
      return state
  }
}

export default updateTypes
