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

test('receiveGrants returns the grants', () => {
  const grants = ['grant1', 'grant2']
  const expected = {
    type: 'RECEIVE_GRANTS',
    grants: ['grant1', 'grant2']
  }

  const actual = receiveGrants(grants)

  expect(actual).toEqual(expected)
})
