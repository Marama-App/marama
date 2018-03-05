import {RECEIVE_PASIFIKAGRANTS} from '../actions/pasifika-grants'

const initialState = []

const pasifikaGrant = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PASIFIKAGRANTS:
      return action.pasifikaGrants

    default:
      return state
  }
}

export default pasifikaGrant
