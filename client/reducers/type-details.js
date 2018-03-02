import {RECEIVE_TYPE_DETAIL} from '../actions/type-details'

const initialState = [1, 2, 3, 4]

const typeDetail = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TYPE_DETAIL:
      return action.typeDetails

    default:
      return state
  }
}

export default typeDetail
