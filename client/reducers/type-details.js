import {RECEIVE_TYPE_DETAILS} from '../actions/type-details'

const initialState = {study: [], jobs: [], help: []}

const typeDetails = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TYPE_DETAILS:
      return action.typeDetails

    default:
      return state
  }
}

export default typeDetails
