/* global test expect */

import { receiveTypeDetail } from '../../../client/actions/type-details'

test('receiveTypeDetail returns the correct action type', () => {
  const expected = 'RECEIVE_TYPE_DETAIL'

  const actual = receiveTypeDetail()

  expect(actual.type).toBe(expected)
})

test('receiveTypeDetail returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_TYPE_DETAIL'
  }

  const actual = receiveTypeDetail()

  expect(actual).toEqual(expected)
})

test('receiveTypeDetail returns the typeDetails', () => {
  const typeDetails = ['typeDetail1', 'typeDetail2']
  const expected = {
    type: 'RECEIVE_TYPE_DETAIL',
    typeDetails: ['typeDetail1', 'typeDetail2']
  }

  const actual = receiveTypeDetail(typeDetails)

  expect(actual).toEqual(expected)
})
