/* global test expect */
import {RECEIVE_GRANTS} from '../../../client/actions/grants'
import grants from '../../../client/reducers/grants'

test('grants receives the grants', () => {
  const beforeState = [{
    grants: 'grant gaming'
  }]

  const action = {
    type: RECEIVE_GRANTS,
    grants: [{
      grants: 'grant music'
    }]

  }
  const afterState = [{
    grants: 'grant music'
  }]

  const actualAfterActionState = grants(beforeState, action)

  expect(actualAfterActionState).toEqual(afterState)
})
