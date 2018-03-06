/* global test expect */
import {RECEIVE_TYPE_DETAILS} from '../../../client/actions/type-details'
import typeDetails from '../../../client/reducers/type-details'

test('typeDetails receives the typeDetail', () => {
  const beforeState = [{
    study: [1],
    jobs: [2],
    help: [3]
  }]

  const action = {
    type: RECEIVE_TYPE_DETAILS,
    typeDetails: [{
      study: [2],
      jobs: [3],
      help: [4]
    }]

  }
  const afterState = [{
    study: [2],
    jobs: [3],
    help: [4]
  }]

  const actualAfterActionState = typeDetails(beforeState, action)

  expect(actualAfterActionState).toEqual(afterState)
})
