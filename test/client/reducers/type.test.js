
/* global test expect */
import { RECEIVE_TYPE } from '../../../client/actions/type'
import type from '../../../client/reducers/type'

// test('interestType initial state of undefined', () => {
//   const expectedInitialState = {
//     typeDetail: 'study'
//   }

//   const actualState = interestType(expectedInitialState, {type: null})
//   expect(actualState).toBe(expectedInitialState)
// })

test('interestType receives the interestType', () => {
  const beforeState = [{
    type: 'study'
  }]
  const action = {
    type: RECEIVE_TYPE,
    interestType: [{
      type: 'jobs'
    }]

  }
  const afterState = [{
    type: 'jobs'
  }]

  const actualAfterActionState = type(beforeState, action)

  expect(actualAfterActionState).toEqual(afterState)
})
