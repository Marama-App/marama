/* global test expect */
import {RECEIVE_INTERESTS} from '../../../client/actions/interests'
import interestsReducer from '../../../client/reducers/interests'

test('interests receives the interests', () => {
  const beforeState = [{
    interests: 'gaming'
  }]

  const action = {
    type: RECEIVE_INTERESTS,
    interests: [{
      interests: 'music'
    }]

  }
  const afterState = [{
    interests: 'music'
  }]

  const actualAfterActionState = interestsReducer(beforeState, action)

  expect(actualAfterActionState).toEqual(afterState)
})
