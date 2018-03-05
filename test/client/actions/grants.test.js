/* global test expect */

import { receiveGrants } from '../../../client/actions/grants'

test('receiveGrants returns the correct action type', () => {
  const expected = 'RECEIVE_GRANTS'

  const actual = receiveGrants()

  expect(actual.type).toBe(expected)
})

test('receiveGrants returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_GRANTS'
  }

  const actual = receiveGrants()

  expect(actual).toEqual(expected)
})
