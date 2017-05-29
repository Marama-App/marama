import { combineReducers } from 'redux'

import wombatReducer from './wombats'
import rhinoReducer from './rhinos'

const reducers = combineReducers({
  wombats: wombatReducer,
  rhinos: rhinoReducer
})

export default reducers
