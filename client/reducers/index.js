import {combineReducers} from 'redux'

import interests from './interests'
import interestType from './type'
import typeDetails from './type-details'
import grants from './grants'
import addTypes from './add-types'
import iwiGrants from './iwi-grants'
import pasifikaGrants from './pasifika-grants'
import allUsers from './all-users'
import errorMessage from './error-message'
import userDetails from './user-details'

export default combineReducers({
  interests,
  interestType,
  typeDetails,
  grants,
  iwiGrants,
  pasifikaGrants,
  addTypes,
  userDetails,
  allUsers,
  errorMessage
})
