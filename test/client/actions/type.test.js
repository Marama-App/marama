/* global test expect */

import { receiveType } from '../../../client/actions/type'

test('receiveType returns the correct action type', () => {
  const expected = 'RECEIVE_TYPE'

  const actual = receiveType()

  expect(actual.type).toBe(expected)
})

test('receiveType returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_TYPE'
  }

  const actual = receiveType()

  expect(actual).toEqual(expected)
})

test('receiveType returns the interestType', () => {
  const interestType = ['type1', 'type2']
  const expected = {
    type: 'RECEIVE_TYPE',
    interestType: ['type1', 'type2']
  }

  const actual = receiveType(interestType)

  expect(actual).toEqual(expected)
})
