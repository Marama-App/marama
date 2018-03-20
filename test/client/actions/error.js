/* global test expect */

import { showError, clearError } from '../../../client/actions/error'

test('showError returns the correct action type', () => {
  const expected = 'SHOW_ERROR'

  const actual = showError()

  expect(actual.type).toBe(expected)
})

test('clearError returns the correct action type', () => {
  const expected = 'CLEAR_ERROR'

  const actual = clearError()

  expect(actual.type).toBe(expected)
})

test('showError returns the correct action', () => {
  const expected = {
    type: 'SHOW_ERROR'
  }

  const actual = showError()

  expect(actual).toEqual(expected)
})

test('clearError returns the correct action', () => {
  const expected = {
    type: 'CLEAR_ERROR'
  }

  const actual = clearError()

  expect(actual).toEqual(expected)
})

test('showError returns the errorMessage', () => {
  const errorMessage = ['Error Message']
  const expected = {
    type: 'RECEIVE_TYPE_DETAIL',
    errorMessage: ['Error Message']
  }

  const actual = showError(errorMessage)

  expect(actual).toEqual(expected)
})
