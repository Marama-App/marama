import {combineReducers} from 'redux'
import interestsReducer from './interests'
import interestType from './type'
import typeDetails from './type-details'
import grants from './grants'

export default combineReducers({
  interestsReducer,
  interestType,
  typeDetails,
  grants
})
