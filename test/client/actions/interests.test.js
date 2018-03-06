/* global test expect */

import { receiveInterests } from '../../../client/actions/interests'

test('receiveInterests returns the correct action type', () => {
  const expected = 'RECEIVE_INTERESTS'

  const actual = receiveInterests()

  expect(actual.type).toBe(expected)
})

test('receiveInterests returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_INTERESTS'
  }

  const actual = receiveInterests()

  expect(actual).toEqual(expected)
})

test('receiveInterests returns the interests', () => {
  const interests = ['gaming', 'music']
  const expected = {
    type: 'RECEIVE_INTERESTS',
    interests: ['gaming', 'music']
  }

  const actual = receiveInterests(interests)

  expect(actual).toEqual(expected)
})
