import {combineReducers} from 'redux'
import interests from './interests'
import interestType from './type'
import typeDetails from './type-details'
import grants from './grants'
import iwiGrants from './iwi-grants'

export default combineReducers({
  interests,
  interestType,
  typeDetails,
  grants,
  iwiGrants
})
